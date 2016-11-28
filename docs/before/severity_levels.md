The first step in any incident response process is to determine what actually constitutes an incident. Generally this is done by using "SEV" definitions, with lower numbered severities being more urgent. Operational issues can be classified at one of these severity levels, and in general you are able to take more risky moves to resolve a higher severity issue. Anything above a SEV-3 is considered a "major incident" and gets a more intensive response than a normal incident.

!!! note "Always Assume The Worst"
     If you are unsure which level an incident is (e.g. not sure if SEV-2 or SEV-1), **treat it as the higher one**. During an incident is not the time to discuss or litigate severities, just assume the highest and review during a post-mortem.

<table class="custom-table">
  <thead>
    <tr>
      <th>Severity</th>
      <th>Description</th>
      <th>What To Do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="sev-1">SEV-1</td>
      <td>
        <ul>
          <li>The system is in a critical state and is actively impacting a large number of customers.</li>
          <li>Functionality has been severely impaired for a long time, breaking SLA.</li>
          <li>Customer-data-exposing security vulnerability has come to our attention.</li>
        </ul>
      </td>
      <td>See <a href="/during/during_an_incident">During an Incident</a>.</td>
    </tr>
    <tr>
      <td class="sev-2">SEV-2</td>
      <td>
        <ul>
          <li>Functionality is severely impaired.</li>
        </ul>
      </td>
      <td>See <a href="/during/during_an_incident">During an Incident</a>.</td>
    </tr>
    <tr>
      <td class="warning" colspan="3">Anything above this line is considered a "Major Incident". A call is triggered for all major incidents.</td>
    </tr>
    <tr>
      <td class="sev-3">SEV-3</td>
      <td>
        <ul>
          <li>Partial loss of functionality, only affecting minority of customers.</li>
          <li>Something that has the likelihood of becoming a SEV-2 if nothing is done.</li>
          <li>No redundancy in a service (failure of 1 more node will cause outage).</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Work on issue as your top priority.</li>
          <li>Liaise with engineers of affected systems to identify cause.</li>
          <li>If related to recent deployment, rollback.</li>
          <li>Monitor status and notice if/when it escalates.</li>
          <li>Mention on Slack if you think it has the potential to escalate.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="sev-4">SEV-4</td>
      <td>
        <ul>
          <li>Performance issues (delays, etc). Tasks that require non-immediate attention.</li>
          <li>Job failure (not impacting alerting).</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Work on the issue as your first priority (above "normal" tasks).</li>
          <li>Monitor status and notice if/when it escalates.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="sev-5">SEV-5</td>
      <td>
        <ul>
          <li>Normal bugs which aren't impacting system use, cosmetic issues, etc.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Create a JIRA ticket and assign to owner of affected system.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

!!! note "Be Specific"
    These severity descriptions have been changed from the PagerDuty internal definitions to be more generic. For your own documentation, you are encouraged to make your definitions very specific, usually referring to a % of users/accounts affected. You will usually want your severity definitions to be metric driven.
