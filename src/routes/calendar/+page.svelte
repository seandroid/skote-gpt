<script>
	import { Alert, Button, Card, CardBody, Col, ModalBody, ModalHeader, Row } from 'sveltestrap';
    import Modal from "../../common/Modal.svelte"
	import Breadcrumb from '../../common/Breadcrumb.svelte';
	import * as FullCalendar from "fullcalendar";
	import HeadTitle from '../../common/HeadTitle.svelte';
	import { onMount } from 'svelte';
    import verificationimg from "../../assets/images/verification-img.png"
    import defaultEvents from "../../common/data/calenderEvents"
	
    let isOpen = false;
	let calendar;
	let modalcategory = false;
	let setEvent = {};
	let isedit = false;
	let setSelectedDay = '';
	let eventsList = defaultEvents;

    const toggle = () => {
		isOpen = !isOpen;
		if (!isOpen) {
			setTimeout(() => {
				setEvent = {};

				isedit = false;
			}, 500);
		}
	};

    function handleDateClick(arg) {
		setSelectedDay = arg;
		toggle();
	}

	const toggleCategory = () => {
		modalcategory = !modalcategory;
	};

    let options;
	let calendarEl;
	let externalEventContainerEl;

	function getInitialView() {
		if (window.innerWidth >= 768 && window.innerWidth < 1200) {
			return "timeGridWeek";
		} else if (window.innerWidth <= 768) {
			return "listMonth";
		} else {
			return "dayGridMonth";
		}
	}


    onMount(() => {
		var Draggable = FullCalendar.Draggable;
		externalEventContainerEl = document.getElementById("external-events");
		// init draggable
		new Draggable(externalEventContainerEl, {
			itemSelector: ".external-event",
			eventData: function (eventEl) {
				return {
					id: Math.floor(Math.random() * 11000),
					title: eventEl.innerText,
					allDay: true,
					start: new Date(),
					className: eventEl.getAttribute("data-class"),
				};
			},
		});

		calendarEl = document.getElementById("calendar");
		options = {
			timeZone: "local",
			editable: true,
			droppable: true,
			selectable: true,
			navLinks: true,
            weekNumbers: true,
			initialView: getInitialView(),
			themeSystem: "bootstrap",
			headerToolbar: {
				left: "prev,next today",
				center: "title",
				right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
			},
			events: eventsList,
			windowResize: function (view) {
				var newView = getInitialView();
				calendar.changeView(newView);
			},
			eventClick: (event) => handleEventClick(event),
			dateClick: (event) => handleDateClick(event.dateStr),
			eventReceive: function (info) {
				var newid = parseInt(info.event.id);
				var newEvent = {
					id: newid,
					title: info.event.title,
					start: info.event.start,
					allDay: info.event.allDay,
					className: info.event.classNames[0],
				};
				eventsList = [...eventsList, newEvent];
				updateCalendarEvents();
			},
		};
		// Initialize FullCalendar
		calendar = new FullCalendar.Calendar(calendarEl, options);

		calendar.render(); // Render the calendar
	});

    function updateCalendarEvents() {
		// Reassign the events property with the updated events data
		options.events = eventsList;
		calendar.destroy(); // Destroy the existing instance
		calendar = new FullCalendar.Calendar(calendarEl, options); // Reinitialize with updated options
		calendar.render();
		calendar.refetchEvents(); // Refresh the calendar with the updated events
	}

	const handleEventClick = (arg) => {
		const event = arg.event;
		setEvent = {
			id: parseInt(event.id),
			title: event.title,
			title_category: event.title_category,
			start: event.start,
			className: event.classNames,
			category: event.classNames[0],
			event_category: event.classNames[0],
		};

		isedit = true;
		toggle();
	};

    const handleValidEventSubmit = async ({
		target: {
			elements: { category, title },
		},
	}) => {
		if (isedit) {
			if (
				title.value == null ||
				title.value == undefined ||
				title.value == ""
			) {
				document.getElementById("divAlert").style.display = "block";
				return false;
			}
			const updateEvent = {
				id: setEvent.id,
				title: title.value,
				className: category.value,
				start: setEvent.start,
				allDay: false,
			};

			const i = eventsList.findIndex(
				(t) => t.id === updateEvent.id
			);
			// update event
			eventsList[i] = updateEvent;
			eventsList = [...eventsList];

			updateCalendarEvents();
		} else {
			if (
				title.value == null ||
				title.value == undefined ||
				title.value == ""
			) {
				document.getElementById("divAlert").style.display = "block";
				return false;
			}
			let newEvent = {
				id: Math.floor(Math.random() * 100),
				title: title.value,
				start: setSelectedDay ? setSelectedDay : new Date(),
				allDay: false,
				className: category.value,
			};
			eventsList = [...eventsList, newEvent];
			updateCalendarEvents();
		}

		setSelectedDay = "";
		toggle();
	};

    const setDeleteModal = (status) => {
		// deleteModal = status;
		isOpen = false;

		var calendarEvents = eventsList.filter((e, i) => {
			return e.id !== setEvent.id;
		});
		eventsList = calendarEvents;
		updateCalendarEvents();
		setTimeout(() => {
			setEvent = {};
			isedit = false;
		}, 500);
	};
</script>

<svelte:head>
	<style>
		#divAlert {
			display: none;
		}
	</style>
    
</svelte:head>

<HeadTitle title="Full Calendar" />
<Breadcrumb title="Calendar" pagetitle="Full Calendar" />

<Row>
	<Col xs={12}>
		<Row class="mb-4">
			<Col lg={3}>
				<Card class="h-100 mb-lg-0">
					<CardBody>
						<div class="d-flex gap-2">
							<Button color="primary" class="font-16 w-100" on:click={toggle}>
								<i class="mdi mdi-plus-circle-outline" />
								Create New Event
							</Button>
						</div>

						<div id="external-events" class="mt-2">
							<br />
							<p class="text-muted">Drag and drop your event or click in the calendar</p>
							<div class="bg-success external-event fc-event text-white" data-class="bg-success">
								<i class="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
								New Event Planning
							</div>
							<div class="bg-info external-event fc-event text-white" data-class="bg-info">
								<i class="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
								Meeting
							</div>
							<div class="bg-warning external-event fc-event text-white" data-class="bg-warning">
								<i class="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
								Generating Reports
							</div>
							<div class="bg-danger external-event fc-event text-white" data-class="bg-danger">
								<i class="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
								Create New theme
							</div>
						</div>
                        <Row class="justify-content-center mt-5">
                            <img src={verificationimg} alt="" class="img-fluid d-block">
                        </Row>
					</CardBody>
				</Card>
			</Col>
			<Col class="col-lg-9 app-calendar">
				<Card class="mb-lg-0">
					<CardBody >
                        <div id="calendar"></div>
                    </CardBody>
				</Card>
			</Col>
		</Row>
	</Col>
</Row>
<Modal {isOpen} className="modal-dialog-centered">
    <ModalHeader {toggle} tag="h4" class="border-bottom-0">
		{!!isedit ? "Edit Event" : "Add Event"}
	</ModalHeader>
    
    <ModalBody>
      <form on:submit|preventDefault={handleValidEventSubmit} id="frmevents">
        <Row>
          <Col class="col-12">
            <div class="mb-3">
                <div id="divAlert">
                    <Alert color="danger">Please provide a valid event name</Alert>
                </div>
              <label class="form-label" for="title">Event Name</label>
              <input
                type="text"
                class="form-control"
                name="title"
                placeholder="Event Name"
                value={setEvent && setEvent.title ? setEvent.title : ""}
                
              />
            </div>
          </Col>
          <Col class="col-12">
            <div class="mb-3">
              <label class="form-label" for="category">Category</label>
              <select
                name="category"
                class="form-control form-select"
                placeholder="Select Category"
                value={setEvent ? setEvent.category : "bg-primary"}
                
              >
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-info">Info</option>
                <option value="bg-dark">Dark</option>
                <option value="bg-warning">Warning</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row class="mt-2">
          <Col xs="12" class="text-end">
            {#if !!isedit}
              <button
                type="button"
                class="btn btn-danger"
                on:click={() => setDeleteModal(true)}>Delete</button
              >
            {/if}
            <button
              type="button"
              class="btn btn-light me-2"
              on:click={toggle}
            >
              Close
            </button>
            <button type="submit" class="btn btn-success save-event">
              Save
            </button>
          </Col>
        </Row>
      </form>
    </ModalBody>
  </Modal>

<!-- <Modal isOpen={modalcategory}>
    <h4 class="modal-header">
      {!!isedit ? "Edit Event" : "Add Event"}
    </h4>
    <ModalBody>
      <form on:submit|preventDefault={handleValidEventSubmitcategory}>
        <Row>
          <Col class="col-12">
            <div class="mb-3">
              <label class="form-label" for="title">Event title</label>

              <input
                type="text"
                class="form-control"
                name="title"
                placeholder="Event Name"
                value=""
              />
            </div>
          </Col>
          <Col class="col-12">
            <div class="mb-3">
              <label class="form-label" for="category">Category</label>
              <select
                name="category"
                class="form-control form-select"
                placeholder="Select Category"
              >
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-info">Info</option>
                <option value="bg-dark">Dark</option>
                <option value="bg-warning">Warning</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row class="mt-2">
          <Col xs="12" class="text-end">
            <button
              type="button"
              class="btn btn-light me-2"
              on:click={toggleCategory}
            >
              Close
            </button>

            <button type="submit" class="btn btn-success save-event">
              Save
            </button>
          </Col>
        </Row>
      </form>
    </ModalBody>
  </Modal> -->
