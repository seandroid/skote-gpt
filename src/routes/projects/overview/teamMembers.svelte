<script>
  import Link from "svelte-link";
  import { Card, CardBody, CardTitle, Table } from "sveltestrap";
  export let team;
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4">Team Members</CardTitle>

    <div class="table-responsive">
      <Table class="table align-middle table-nowrap">
        <tbody>
          {#each team as member}
            <tr>
              <td style="width: 50px">
                {#if member.img !== "Null"}
                  <img
                    src={member.img}
                    class="rounded-circle avatar-xs"
                    alt=""
                  />
                {:else}
                  <div class="avatar-xs">
                    <span
                      class="avatar-title rounded-circle bg-primary text-white font-size-16"
                    >
                      {member.name}
                    </span>
                  </div>
                {/if}
              </td>
              <td>
                <h5 class="font-size-14 m-0">
                  <Link href="#" class="text-dark">
                    {member.fullname}
                  </Link>
                </h5>
              </td>
              <td>
                <div>
                  {#each member.skills as skill}
                    <Link
                      href="#"
                      class="badge bg-primary-subtle text-primary font-size-11 me-2"
                    >
                      {skill.name}
                    </Link>
                  {/each}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </div>
  </CardBody>
</Card>
