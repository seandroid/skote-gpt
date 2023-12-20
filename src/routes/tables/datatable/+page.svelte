<script>
	import { onMount } from 'svelte';
	import { data } from '../../../common/data/datatables';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import { Card, CardBody, Col, Row, Table } from 'sveltestrap';
	import Link from 'svelte-link/src/Link.svelte';

	let items = data;

	let columns = [
		{ label: 'ID', key: 'id' },
		{ label: 'Name', key: 'name' },
		{ label: 'Position', key: 'position' },
		{ label: 'Office', key: 'office' },
		{ label: 'Age', key: 'age' },
		{ label: 'Start Date', key: 'start_date' },
		{ label: 'Salary', key: 'salary' }
	];

	let currentPage = 1;
	let itemsPerPage = 10;
	let sortedColumn = 'id';
	let sortDirection = 1; // 1 for ascending, -1 for descending
	let currentItems = [];
	let currentPaginationlinks = [];

	function onPageChange(page) {
		currentPage = page;
		currentItems = getVisibleItems();
	}

	function onItemsPerPage(event) {
		itemsPerPage = event.target.value;
		currentItems = getVisibleItems();
	}

	function onSortChange(column) {
		if (column === sortedColumn) {
			// If the same column is clicked, reverse the sort direction
			sortDirection *= -1;
		} else {
			// If a new column is clicked, set it as the sorted column and reset direction
			sortedColumn = column;
			sortDirection = 1;
		}

		// Sort the items based on the selected column and direction
		items = items.sort((a, b) => {
			const aValue = a[column];
			const bValue = b[column];

			if (aValue < bValue) return -sortDirection;
			if (aValue > bValue) return sortDirection;
			return 0;
		});
		currentItems = getVisibleItems();
	}

	function getVisibleItems() {
		// Calculate the start and end indices based on pagination
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = Math.min(startIndex + itemsPerPage, items.length);
		currentPaginationlinks = getVisiblePageLinks()
		return items.slice(startIndex, endIndex);
	}

	let maxPagesToShow = 10; // Set the maximum number of pages to show at a time

	function getVisiblePageLinks() {
		const totalPages = Math.ceil(items.length / itemsPerPage);
		const visiblePages = [];

		for (
			let i = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
			i <= Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2));
			i++
		) {
			visiblePages.push(i);
		}

		return visiblePages;
	}

	onMount(() => {
		currentItems = getVisibleItems();
		currentPaginationlinks = getVisiblePageLinks()
	});
</script>

<HeadTitle title="Data Tables" />

<Breadcrumb title="Tables" pagetitle="Data Tables" />

<Row>
	<Col md={12}>
		<Card>
			<CardBody>
				<h4 class="card-title">Default Datatable</h4>
				<div>
					<div class="row">
						<div class="col-sm-12 col-md-6">
							<div class="dataTables_length" id="datatable_length">
								<label class="d-inline-flex align-items-center"
									>Show
									<select name="datatable_length" class="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm" on:change={onItemsPerPage}>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									</select>
									entries
								</label>
							</div>
						</div>
						<!-- <div class="col-sm-12 col-md-6">
							<div id="datatable_filter" class="dataTables_filter">
								<label
									>Search:<input
										type="search"
										class="form-control form-control-sm"
										placeholder=""
										aria-controls="datatable"
									/></label
								>
							</div>
						</div> -->
					</div>
					<Table bordered>
						<thead>
							<tr>
								{#each columns as { label, key } (key)}
									<th on:click={() => onSortChange(key)} class="sort {sortedColumn === key ? sortDirection == 1 ? "asc": "desc":""}">
										{label}
									</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each currentItems as item (item.id)}
								<tr>
									{#each Object.values(item) as value (value)}
										<td>{value}</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					</Table>
					<ul class="pagination text-end float-end">
						<li class="page-item {currentPage - 1 < 1 ? 'disabled' : ''}">
							<Link
								class="page-link"
								href="#"
								aria-label="Previous"
								on:click={() => onPageChange(currentPage - 1)}
							>
								<span aria-hidden="true">&laquo;</span>
							</Link>
						</li>

						{#each currentPaginationlinks as page (page)}
							<li class={page === currentPage ? 'active' : ''} on:click={() => onPageChange(page)}>
								<Link href="#" class="page-link">{page}</Link>
							</li>
						{/each}

						<li
							class="page-item {Math.ceil(items.length / itemsPerPage) <= currentPage
								? 'disabled'
								: ''}"
						>
							<Link
								class="page-link"
								href="#"
								aria-label="Next"
								on:click={() => onPageChange(currentPage + 1)}
							>
								<span aria-hidden="true">&raquo;</span>
							</Link>
						</li>
					</ul>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>
