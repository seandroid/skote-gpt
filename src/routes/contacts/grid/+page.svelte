<script>
	import {
		Button,
		Card,
		CardBody,
		CardTitle,
		Col,
		FormGroup,
		Input,
		Label,
		Row
	} from 'sveltestrap';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
  import data from "../../../common/data/contacts";
	import Link from 'svelte-link';

</script>

<HeadTitle title="Users Grid" />

<Breadcrumb title="Contacts" pagetitle="Users Grid" />

<Row>
    {#each data.users as user}
      <div class="col-xl-3 col-sm-6">
        <div class="card text-center">
          <div class="card-body">
            {#if !user.img}
              <div class="avatar-sm mx-auto mb-4">
                <span
                  class={"avatar-title rounded-circle bg-" +
                    user.color +
                    "-subtle text-" +
                    user.color +
                    " font-size-16"}
                >
                  {user.name.charAt(0)}
                </span>
              </div>
            {:else}
              <div class="mb-4">
                <img class="rounded-circle avatar-sm" src={user.img} alt="" />
              </div>
            {/if}
            <h5 class="font-size-15 mb-1">
              <Link htef="#" class="text-dark">{user.name}</Link>
            </h5>
            <p class="text-muted">{user.designation}</p>

            <div>
              {#each user.tags as tag, index}
                {#if index < 2}
                  <Link href="#" class="badge bg-primary font-size-11 m-1"
                    >{tag}</Link
                  >
                {/if}
              {/each}

              {#if user.tags.length > 2}
                <Link href="#" class="badge bg-primary font-size-11 m-1">
                  {user.tags.length - 1} + more
                </Link>
              {/if}
            </div>
          </div>
          <div class="card-footer bg-transparent border-top">
            <div class="contact-links d-flex font-size-20">
              <div class="flex-fill">
                <Link htef="#"><i class="bx bx-message-square-dots" /></Link>
              </div>
              <div class="flex-fill">
                <Link htef="#"><i class="bx bx-pie-chart-alt" /></Link>
              </div>
              <div class="flex-fill">
                <Link htef="#"><i class="bx bx-user-circle" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </Row>
  <Row>
    <Col xs="12">
      <div class="text-center my-3">
        <Link to="#" class="text-success">
          <i class="bx bx-hourglass bx-spin me-2" />
          Load more
        </Link>
      </div>
    </Col>
  </Row>