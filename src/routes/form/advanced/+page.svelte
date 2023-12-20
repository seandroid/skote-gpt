<script>
	import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'sveltestrap';
	import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
	import Flatpickr from 'svelte-flatpickr';
    import 'flatpickr/dist/flatpickr.css';

	import Breadcrumb from './../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Select from 'svelte-select';

	const optionGroup = [
		{ value: 'chocolate', label: 'Chocolate', group: 'Sweet' },
		{ value: 'pizza', label: 'Pizza', group: 'Savory' },
		{ value: 'cake', label: 'Cake', group: 'Sweet' },
		{ value: 'chips', label: 'Chips', group: 'Savory' },
		{ value: 'ice-cream', label: 'Ice Cream', group: 'Sweet' }
	];

	const optionGroup1 = [
		{ label: 'Mustard', value: 'Mustard', group: 'Picnic' },
		{ label: 'Ketchup', value: 'Ketchup', group: 'Picnic' },
		{ label: 'Relish', value: 'Relish', group: 'Picnic' },
		{ label: 'Tent', value: 'Tent', group: 'Camping' },
		{ label: 'Flashlight', value: 'Flashlight', group: 'Camping' },
		{ label: 'Toilet Paper', value: 'Toilet Paper', group: 'Camping' }
	];

	const optionGroup2 = [
		{ label: 'Mustard', value: 'Mustard', group: 'Picnic' },
		{ label: 'Ketchup', value: 'Ketchup', group: 'Picnic' },
		{ label: 'Relish', value: 'Relish', group: 'Picnic' },
		{ label: 'Tent', value: 'Tent', group: 'Camping' },
		{ label: 'Flashlight', value: 'Flashlight', group: 'Camping' },
		{ label: 'Toilet Paper', value: 'Toilet Paper', group: 'Camping' }
	];

	const groupBy = (item) => item.group;
</script>

<HeadTitle title="Form Advanced" />

<Breadcrumb title="UI Elements" pagetitle="Form Advanced" />

<Row>
	<Col lg="12">
		<Card>
			<CardBody>
				<h4 class="card-title">Select2</h4>
				<p class="card-title-desc">
					A mobile and touch friendly input spinner component for Bootstrap
				</p>

				<form>
					<Row>
						<Col lg="6">
							<div class="mb-3 select2-container">
								<Label>Single Select</Label>
								<Select items={optionGroup} --height="36px" />
							</div>
							<div class="mb-3 select2-container">
								<Label class="control-label">Multiple Select</Label>
								<Select isMulti={true} items={optionGroup}  multiple/>
							</div>

							<FormGroup class="select2-container">
								<Label>Search Disable</Label>
								<Select isMulti={true} items={optionGroup} {groupBy} isDisabled={true} searchable={false}/>
							</FormGroup>
						</Col>

						<Col lg="6">
							<FormGroup class="mb-3 ajax-select select2-container">
								<Label>Ajax (remote data)</Label>
								<Select isMulti={true} items={optionGroup1} {groupBy}/>
							</FormGroup>
							<FormGroup class="mb-3 mt-3 mt-lg-0 templating-select select2-container">
								<Label class="control-label">Templating</Label>
								<Select isMulti={true} items={optionGroup2} {groupBy} />
							</FormGroup>
							<FormGroup class="mb-3 mt-3 mt-lg-0 templating-select select2-container">
								<Label class="control-label">Disable Select</Label>
								<Select isMulti={true} items={optionGroup2} {groupBy} disabled/>
							</FormGroup>
						</Col>
					</Row>
				</form>
			</CardBody>
		</Card>
	</Col>
</Row>
<Row>
	<Col lg="6">
		<Card>
			<CardBody>
				<h4 class="card-title">Colorpicker</h4>
				<p class="card-title-desc">
					Examples of Spectrum Colorpicker.
				</p>
				<Form action="#">
					<div class="mb-3">
						<Label class="form-label">Simple input field</Label>
						<ColorPicker hex="#50a5f1" isInput={true} label="" />
					</div>
					<div class="mb-3">
						<Label class="form-label">Chrome variant</Label>
						<ColorPicker isInput={true} hex="#34c38f" label="" components={ChromeVariant}  />
					</div>
				</Form>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<h4 class="card-title">Timepicker</h4>
				<p class="card-title-desc">
					Easily select a time for a text input using your mouse or keyboards arrow keys.
				</p>
				<Form action="#">
					<div class="mb-3">
						<Label class="form-label">Default Time Picker</Label>
						<Flatpickr class="form-control"  options={{enableTime: true,noCalendar: true,dateFormat: "H:i",defaultHour:'11'}} name="date"  />
					</div>
					<div class="mb-3">
						<Label class="form-label">24 Hour Mode Time Picker</Label>
						<Flatpickr class="form-control"  options={{enableTime: true,noCalendar: true,dateFormat: "H:i",time_24hr: true,defaultHour:'20'}} name="date"  />
					</div>
				</Form>
			</CardBody>
		</Card>
	</Col>
	<Col lg="6">
		<Card>
			<CardBody>
				<h4 class="card-title">Datepicker</h4>
				<p class="card-title-desc">
					Examples of datepicker.
				</p>
				<Form action="#">
					<div class="mb-3">
						<Label class="form-label">Default Functionality</Label>
						<Flatpickr class="form-control"  options={{'dateFormat': "d M, y"}} name="date" placeholder="dd M, yyyy" />
					</div>
					<div class="mb-3">
						<Label class="form-label">Auto Close</Label>
						<Flatpickr class="form-control" options={{'dateFormat': "d M, y",enableTime: true}} placeholder="dd M, yyyy"/>
					</div>
					<div class="mb-3">
						<Label class="form-label">Multiple Date</Label>
						<Flatpickr class="form-control" options={{'dateFormat': "d M, y",mode: "multiple",}} placeholder="dd M, yyyy" />
					</div>
					<div class="mb-3">
						<Label class="form-label">Date Range</Label>
						<Flatpickr class="form-control" options={{'dateFormat': "M, y",mode: "range",showMonths: 2,}} />
					</div>
					<div class="mb-3">
						<Label class="form-label">Date & Time</Label>
						<Flatpickr class="form-control" options={{'dateFormat': "M, y H:i",showMonths: 1,enableTime: true}} />
					</div>
					<div class="mb-3">
						<Label class="form-label">Inline Date picker</Label>
						<Flatpickr class="form-control" options={{'dateFormat': "Y-m-d",mode: "single",showMonths: 1,inline: true,disable:["2023-01-30"]}} />
					</div>
				</Form>
			</CardBody>
		</Card>
	</Col>
</Row>

<Row >
	<Col lg="12">
		<Card>
			<CardBody>

				<h4 class="card-title">Css Switch</h4>
				<p class="card-title-desc">Here are a few types of switches. </p>

				<Row >
					<Col lg="6">
						<h5 class="font-size-14 mb-3">Example switch</h5>
						<div>
							<input type="checkbox" id="switch1" switch="none" checked />
							<label for="switch1" data-on-label="On" data-off-label="Off"></label>

							<input type="checkbox" id="switch2" switch="default" checked />
							<label for="switch2" data-on-label="" data-off-label=""></label>

							<input type="checkbox" id="switch3" switch="bool" checked />
							<label for="switch3" data-on-label="Yes" data-off-label="No"></label>

							<input type="checkbox" id="switch6" switch="primary" checked />
							<label for="switch6" data-on-label="Yes" data-off-label="No"></label>

							<input type="checkbox" id="switch4" switch="success" checked />
							<label for="switch4" data-on-label="Yes" data-off-label="No"></label>

							<input type="checkbox" id="switch7" switch="info" checked />
							<label for="switch7" data-on-label="Yes" data-off-label="No"></label>

							<input type="checkbox" id="switch5" switch="warning" checked />
							<label for="switch5" data-on-label="Yes" data-off-label="No"></label>

							<input type="checkbox" id="switch8" switch="danger" checked />
							<label for="switch8" data-on-label="Yes" data-off-label="No"></label>

							<input type="checkbox" id="switch9" switch="dark" checked />
							<label for="switch9" data-on-label="Yes" data-off-label="No"></label>
						</div>
					</Col>
					<Col lg="6">
						<div class="mt-4 mt-lg-0">
							<h5 class="font-size-14 mb-3">Square switch</h5>
							<div class="d-flex">
								<div class="square-switch">
									<input type="checkbox" id="square-switch1" switch="none" checked />
									<label for="square-switch1" data-on-label="On"
										data-off-label="Off"></label>
								</div>
								<div class="square-switch">
									<input type="checkbox" id="square-switch2" switch="info" checked />
									<label for="square-switch2" data-on-label="Yes"
										data-off-label="No"></label>
								</div>
								<div class="square-switch">
									<input type="checkbox" id="square-switch3" switch="bool" checked />
									<label for="square-switch3" data-on-label="Yes"
										data-off-label="No"></label>
								</div>
							</div>
						</div>
					</Col>
				</Row>


			</CardBody>
		</Card>


	</Col>
</Row>