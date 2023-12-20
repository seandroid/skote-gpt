<script>
	import {
		Button,
		Card,
		CardBody,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Input,
		Row
	} from 'sveltestrap';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import Link from 'svelte-link';
</script>

<Col xl="4">
	<Card>
		<CardBody class="border-bottom">
			<Row>
				<Col md="4" xs="9">
					<h5 class="font-size-15 mb-1">Steven Franklin</h5>
					<p class="text-muted mb-0">
						<i class="mdi mdi-circle text-success align-middle me-1" /> Active now
					</p>
				</Col>
				<Col md="8" xs="3">
					<ul class="list-inline user-chat-nav text-end mb-0">
						<li class="list-inline-item d-none d-sm-inline-block">
							<Dropdown>
								<DropdownToggle class="nav-btn" tag="a">
									<i class="bx bx-search-alt-2" />
								</DropdownToggle>
								<DropdownMenu end>
									<DropdownItem class="py-0 dropdown-menu-md">
										<form class="p-3">
											<div class="form-group m-0">
												<div class="input-group">
													<Input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" />
													<Button color="primary" type="submit"><i class="mdi mdi-magnify" /></Button>
												</div>
											</div>
										</form>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</li>
						<li class="list-inline-item d-none d-sm-inline-block">
							<Dropdown>
								<DropdownToggle class="nav-btn" tag="a">
									<i class="bx bx-cog" />
								</DropdownToggle>
								<DropdownMenu end>
									<DropdownItem>View Profile</DropdownItem>
									<DropdownItem>Clear chat</DropdownItem>
									<DropdownItem>Muted</DropdownItem>
									<DropdownItem>Delete</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</li>
						<li class="list-inline-item d-none d-sm-inline-block">
							<Dropdown>
								<DropdownToggle class="nav-btn" tag="a">
									<i class="bx bx-dots-horizontal-rounded" />
								</DropdownToggle>
								<DropdownMenu end>
									<DropdownItem>Action</DropdownItem>
									<DropdownItem>Another action</DropdownItem>
									<DropdownItem>Something else</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</li>
					</ul>
				</Col>
			</Row>
		</CardBody>
		<CardBody class="pb-0">
			<div class="chat-conversation">
				<OverlayScrollbarsComponent defer>
					<ul class="list-unstyled" data-overlayscrollbars-initialize style="max-height: 260px;">
						<li>
							<div class="chat-day-title">
								<span class="title">Today</span>
							</div>
						</li>
						<li>
							<div class="conversation-list">
								<Dropdown>
									<DropdownToggle tag="div">
										<i class="bx bx-dots-vertical-rounded" />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Copy</DropdownItem>
										<DropdownItem>Save</DropdownItem>
										<DropdownItem>Forward</DropdownItem>
										<DropdownItem>Delete</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<div class="ctext-wrap">
									<div class="conversation-name">Steven Franklin</div>
									<p>Hello!</p>
									<p class="chat-time mb-0">
										<i class="bx bx-time-five align-middle me-1" /> 10:00
									</p>
								</div>
							</div>
						</li>

						<li class="right">
							<div class="conversation-list">
								<Dropdown>
									<DropdownToggle tag="div">
										<i class="bx bx-dots-vertical-rounded" />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Copy</DropdownItem>
										<DropdownItem>Save</DropdownItem>
										<DropdownItem>Forward</DropdownItem>
										<DropdownItem>Delete</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<div class="ctext-wrap">
									<div class="conversation-name">Henry Wells</div>
									<p>Hi, How are you? What about our next meeting?</p>

									<p class="chat-time mb-0">
										<i class="bx bx-time-five align-middle me-1" /> 10:02
									</p>
								</div>
							</div>
						</li>

						<li>
							<div class="conversation-list">
								<Dropdown>
									<DropdownToggle tag="div">
										<i class="bx bx-dots-vertical-rounded" />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Copy</DropdownItem>
										<DropdownItem>Save</DropdownItem>
										<DropdownItem>Forward</DropdownItem>
										<DropdownItem>Delete</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<div class="ctext-wrap">
									<div class="conversation-name">Steven Franklin</div>
									<p>Yeah everything is fine</p>

									<p class="chat-time mb-0">
										<i class="bx bx-time-five align-middle me-1" /> 10:06
									</p>
								</div>
							</div>
						</li>

						<li class="last-chat">
							<div class="conversation-list">
								<Dropdown>
									<DropdownToggle tag="div">
										<i class="bx bx-dots-vertical-rounded" />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Copy</DropdownItem>
										<DropdownItem>Save</DropdownItem>
										<DropdownItem>Forward</DropdownItem>
										<DropdownItem>Delete</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<div class="ctext-wrap">
									<div class="conversation-name">Steven Franklin</div>
									<p>& Next meeting tomorrow 10.00AM</p>
									<p class="chat-time mb-0">
										<i class="bx bx-time-five align-middle me-1" /> 10:06
									</p>
								</div>
							</div>
						</li>

						<li class="right">
							<div class="conversation-list">
								<Dropdown>
									<DropdownToggle tag="div">
										<i class="bx bx-dots-vertical-rounded" />
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem>Copy</DropdownItem>
										<DropdownItem>Save</DropdownItem>
										<DropdownItem>Forward</DropdownItem>
										<DropdownItem>Delete</DropdownItem>
									</DropdownMenu>
								</Dropdown>
								<div class="ctext-wrap">
									<div class="conversation-name">Henry Wells</div>
									<p>Wow that's great</p>

									<p class="chat-time mb-0">
										<i class="bx bx-time-five align-middle me-1" /> 10:07
									</p>
								</div>
							</div>
						</li>
					</ul>
				</OverlayScrollbarsComponent>
			</div>
		</CardBody>
		<div class="p-3 chat-input-section">
			<div class="row">
				<div class="col">
					<div class="position-relative">
						<input
							type="text"
							class="form-control rounded chat-input"
							placeholder="Enter Message..."
						/>
						<div class="chat-input-links">
							<ul class="list-inline mb-0">
								<li class="list-inline-item">
									<Link href="#"><i class="mdi mdi-emoticon-happy-outline" /></Link>
								</li>
								<li class="list-inline-item">
									<Link href="#"><i class="mdi mdi-file-image-outline" /></Link>
								</li>
								<li class="list-inline-item">
									<Link href="#"><i class="mdi mdi-file-document-outline" /></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-auto">
					<button type="submit" class="btn btn-primary chat-send w-md waves-effect waves-light"
						><span class="d-none d-sm-inline-block me-2">Send</span>
						<i class="mdi mdi-send" /></button
					>
				</div>
			</div>
		</div>
	</Card>
</Col>
