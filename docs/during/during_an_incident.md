Information on what to do during a major incident. See our [severity level descriptions](/before/severity_levels.md) for what constitutes a major incident.

!!! note "Documentation"
    For your own internal documentation, you should make sure that this page has all of the necessary information prominently displayed. Such as: phone bridge numbers, Slack rooms, important chat commands, etc. Here is an example,

    <table class="custom-table" id="contact-summary">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">#incident-chat</a></td>
          <td><a href="#">https://a-voip-provider.com/incident-call</a></td>
          <td><a href="#">+1 555 BIG FIRE</a> (+1 555 244 3473) / PIN: 123456</td>
        </tr>
        <tr>
          <td colspan="3" class="centered">Need an IC? Do <code>!ic page</code> in Slack</td>
        </tr>
        <tr>
          <td colspan="3"><em>For executive summary updates only, join <a href="#">#executive-summary-updates</a>.</em></td>
        </tr>
      </tbody>
    </table>

!!! info "Security Incident?"
    If this is a security incident, you should follow the [Security Incident Response](/during/security_incident_response.md) process.

## Don't Panic!

1. Join the incident call and chat (see links above).
    * Anyone is free to join the call or chat to observe and follow along with the incident.
    * If you wish to participate however, you should join both. If you can't join the call for some reason, you should have a dedicated proxy for the call. Disjointed discussions in the chat room are ultimately distracting.

1. Follow along with the call/chat, add any comments you feel are appropriate, but keep the discussion relevant to the problem at hand.
    * If you are not an SME, try to filter any discussion through the primary SME for your service. Too many people discussing at once get become overwhelming, so we should try to maintain a hierarchical structure to the call if possible.

1. Follow instructions from the Incident Commander.
    * **Is there no IC on the call?**
        * Manually page them via Slack, with `!ic page` in Slack. This will page the primary and backup IC's at the same time.
        * Never hesitate to page the IC. It's much better to have them and not need them than the other way around.

## Steps for Incident Commander
Resolve the incident as quickly and as safely as possible, use the Deputy to assist you. Delegate any tasks to relevant experts at your discretion.

1. Announce on the call and in Slack that you are the incident commander, who you have designated as deputy (usually the backup IC), and scribe.

1. Identify if there is an obvious cause to the incident (recent deployment, spike in traffic, etc.), delegate investigation to relevant experts,
    * Use the service experts on the call to assist in the analysis. They should be able to quickly provide confirmation of the cause, but not always. It's the call of the IC on how to proceed in cases where the cause is not positively known. Confer with service owners and use their knowledge to help you.

1. Identify investigation & repair actions (roll back, rate-limit services, etc) and delegate actions to relevant service experts. Typically something like this (obviously not an exhaustive list),
    * **Bad Deployment:** Roll it back.
    * **Web Application Stuck/Crashed:** Do a rolling restart.
    * **Event Flood:** Validate automatic throttling is sufficient, adjust manually if not.
    * **Data Center Outage:** Validate automation has removed bad data center. Force it to do so if not.
    * **Degraded Service Behavior without load:** Gather forensic data (heap dumps, etc), and consider doing a rolling restart.

1. Listen for prompts from your Deputy regarding severity escalations, decide whether we need to announce publicly, and instruct customer liaison accordingly.
    * Announcing publicly is at your discretion as IC. If you are unsure, then announce publicly ("If in doubt, tweet it out").

1. Once incident has recovered or is actively recovering, you can announce that the incident is over and that the call is ending. This usually indicates there's no more productive work to be done for the incident right now.
    * Move the remaining, non-time-critical discussion to Slack.
    * Follow up to ensure the customer liaison wraps up the incident publicly.
    * Identify any post-incident clean-up work.
    * You may need to perform debriefing/analysis of the underlying root cause.

1. (After call ends) Create the post-mortem page from the template, and assign an owner to the post-mortem for the incident.

1. (After call ends) Send out an internal email explaining that we had a major incident, provide a link to the post-mortem.

## Steps for Deputy
You are there to support the IC in whatever they need.

1. Monitor the status, and notify the IC if/when the incident escalates in severity level,
    * OfficerURL can help you to monitor the status on Slack,
        * `!status` - Will tell you the current status.
        * `!status stalk` - Will continually monitor the status and report it to the room every 30s.

1. Be prepared to page other people as directed by the Incident Commander.

1. Provide regular status updates in Slack (roughly every 30mins) to the executive team, giving an executive summary of the current status. Keep it short and to the point, and use @here.

1. Follow instructions from the Incident Commander.

## Steps for Scribe
You are there to document the key information from the incident in Slack.

1. Update the Slack room with who the IC is, who the Deputy is, and that you're the scribe (if not already done).
    * e.g. "IC: Bob Boberson, Deputy: Deputy Deputyson, Scribe: Writer McWriterson"

1. You should add notes to Slack when significant actions are taken, or findings are determined. You don't need to wait for the IC to direct this - use your own judgment.
    * You should also add `TODO` notes to the Slack room that indicate follow-ups slated for later.

1. Follow instructions from the Incident Commander.

## Steps for Subject Matter Experts
You are there to support the incident commander in identifying the cause of the incident, suggesting and evaluation repair actions, and following through on the repair actions.

1. Investigate the incident by analyzing any graphs or logs at your disposal. Announce all findings to the incident commander.
    * If you are unsure of the cause, that's fine, state that you are investigating and provide regular updates to the IC.

1. Announce all suggestions for resolution to the incident commander, it is their decision on how to proceed, do not follow any actions unless told to do so!

1. Follow instructions from the incident commander.

1. (Optional) Once the call is over and post-mortem is created, add any notes you think are relevant to the post-mortem page.

## Steps for Customer Liaison
Be on stand-by to post public facing messages regarding the incident.

1. You will typically be required to update the status page and to send Tweets from our various accounts at certain times during the call.

1. Follow instructions from the Incident Commander.
