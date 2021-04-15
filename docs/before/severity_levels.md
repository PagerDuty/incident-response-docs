---
cover: assets/img/covers/severity_levels.png
description: Incidents are typically classified by severity or priority. At PagerDuty we use 'SEV' levels, with lower numbered severities being more urgent. Operational issues can be classified at one of these severity levels, and in general you are able to take more risky moves to resolve a higher severity issue.
---
The first step in any incident response process is to determine what actually [constitutes an incident](../before/what_is_an_incident.md). Incidents can then be classified by severity, usually done by using "SEV" definitions, with the lower numbered severities being more urgent. Operational issues can be classified at one of these severity levels, and in general you are able to take more risky moves to resolve a higher severity issue. Anything above a SEV-3 is automatically considered a "major incident" and gets a more intensive response than a normal incident.

!!! tip "Always Assume The Worst"
     If you are unsure which level an incident is (e.g. not sure if SEV-2 or SEV-1), **treat it as the higher one**. During an incident is not the time to discuss or litigate severities, just assume the highest and review during a postmortem.

!!! question "Can a SEV-3 be a major incident?"
     All SEV-2's are major incidents, but not all major incidents need to be SEV-2's. If you require coordinated response, even for lower severity issues, trigger our incident response process. The Incident Commander can make a determination on whether full incident response is necessary.

<table class="custom-table">
  <thead>
    <tr>
      <th class="sev">Severity</th>
      <th>Description</th>
      <th>Typical Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="sev-1">SEV-1</td>
      <td>
        <p class="intent">Critical issue that warrants public notification and liaison with executive teams.</p>
        <ul>
          <li>The system is in a critical state and is actively impacting a large number of customers.</li>
          <li>Functionality has been severely impaired for a long time, breaking SLA.</li>
          <li>Customer-data-exposing security vulnerability has come to our attention.</li>
        </ul>
      </td>
      <td>
        <p class="response">Major incident response.</p>
        <ul>
          <li>Page an IC in Slack <code>!ic page</code>.</li>
          <li>See <a href="/during/during_an_incident">During an Incident</a>.</li>
          <li>Notify internal stakeholders.</li>
          <li>Public notification.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="sev-2">SEV-2</td>
      <td>
        <p class="intent">Critical system issue actively impacting many customers' ability to use the product.</p>
        <ul>
          <li>Notification pipeline is severely impaired.</li>
          <li>Incident response functionality (ack, resolve, etc) is severely impaired.</li>
          <li>Web app is unavailable or experiencing severe performance degradation for most/all users.</li>
          <li>Monitoring of PagerDuty systems for major incident conditions is impaired.</li>
          <li>Any other event to which a PagerDuty employee deems necessary of an incident response.</li>
        </ul>
      </td>
      <td>
        <p class="response">Major incident response.</p>
        <ul>
          <li>Page an IC in Slack <code>!ic page</code>.</li>
          <li>See <a href="/during/during_an_incident">During an Incident</a>.</li>
        </ul>
    </tr>
    <tr>
      <td class="warning" colspan="3">Anything above this line is considered a "Major Incident". Our incident response process should be triggered for any major incidents.</td>
    </tr>
    <tr>
      <td class="sev-3">SEV-3</td>
      <td>
        <p class="intent">Stability or minor customer-impacting issues that require immediate attention from service owners.</p>
        <ul>
          <li>Partial loss of functionality, not affecting majority of customers.</li>
          <li>Something that has the likelihood of becoming a SEV-2 if nothing is done.</li>
          <li>No redundancy in a service (failure of 1 more node will cause outage).</li>
        </ul>
      </td>
      <td>
        <p class="response">High-Urgency page to service team.</p>
        <ul>
          <li>Work on issues as your top priority.</li>
          <li>Liaise with engineers of affected systems to identify cause.</li>
          <li>If related to recent deployment, rollback.</li>
          <li>Monitor status and notice if/when it escalates.</li>
          <li>Mention on Slack if you think it has the potential to escalate.</li>
          <li>Trigger incident response if necessary (<code>!ic page</code>).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="sev-4">SEV-4</td>
      <td>
        <p class="intent">Minor issues requiring action, but not affecting customer ability to use the product.</p>
        <ul>
          <li>Performance issues (delays, etc).</li>
          <li>Individual host failure (i.e. one node out of a cluster).</li>
          <li>Delayed job failure (not impacting event & notification pipeline).</li>
          <li>Cron failure (not impacting event & notification pipeline).</li>
        </ul>
      </td>
      <td>
        <p class="response">Low-Urgency page to service team.</p>
        <ul>
          <li>Work on the issue as your first priority (above "normal" tasks).</li>
          <li>Monitor status and notice if/when it escalates.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td class="sev-5">SEV-5</td>
      <td>
        <p class="intent">Cosmetic issues or bugs, not affecting customer ability to use the product.</li>
        <ul>
          <li>Bugs not impacting the immediate ability to use the system.</li>
        </ul>
      </td>
      <td>
        <p class="response">JIRA ticket.</p>
        <ul>
          <li>Create a JIRA ticket and assign to owner of affected system.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

!!! note "Be Specific"
    These severity descriptions have been changed from the PagerDuty internal definitions to be more generic. For your own documentation, you are encouraged to make your definitions very specific, usually referring to a % of users/accounts affected. You will usually want your severity definitions to be metric driven.
