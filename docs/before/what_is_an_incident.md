---
cover: assets/img/covers/incident.png
description: Before defining an incident response process, we should first define what an incident (and a major incident) is, along with how we should trigger the response for such incidents.
hero: assets/img/headers/server_incident.png
hero_alt_text: Incident
---
Before we can define our incident response process, we should first define what an incident (and a major incident) is.

## What is an incident?
Any unplanned disruption or degradation of service that is actively affecting customers ability to use PagerDuty.

## What is a major incident?
Any incident that requires a coordinated response between multiple teams.

## What is incident response?
An organized approach to addressing and managing an incident. The goal isn't just to solve the incident, but to handle the situation in a way that limits damage and reduces recovery time and costs.

## What triggers our incident response process?
Our incident response process should be initiated for any major incident. It provides a framework for effectively responding and reaching a fast resolution time. Our incident response process can be triggered one of two ways, either via automated monitoring and alerting, or manually via human action.

### Automated Monitoring
Throughout our system, we monitor various metrics to determine if our system is in a state which would require a coordinated human response in order to resolve. To determine which metrics we monitor, and what to monitor them for, we ask ourselves these questions. If the answer to any is "No", then we should trigger our incident response process.

1. Can customers perform all incident response functions provided by PagerDuty, across all platforms?
    * e.g. Can customers acknowledge, reassign, and resolve incidents via every supported method?
1. Are customers receiving notifications within SLA?

### Human Escalation
Automatic monitoring is only part of the process. We may have parts of our functionality which lack the necessary monitoring. It's important to still be able to trigger a coordinated incident response in those cases. For example, if our Support team starts to receive requests that indicate a system issue, they need to have the power to trigger our response. Any PagerDuty employee has the ability to trigger our incident response process at any time.

We trigger on any unplanned disruption or degradation of service to which any PagerDuty employee deems necessary of requiring coordinated incident response.

!!! question "Is a response required?"
    If you are unsure of whether response is required, trigger our incident response process. All you need to do to start the process is page an Incident Commander in Slack with `!ic page`.

## Incident Severity
Our [severity definitions](/before/severity_levels.md) determine how severe we _think_ an incident is based on some predefined guidelines. The intent is to guide responders on the type of response they can provide. For example, the higher the severity, the riskier the decisions you can take to return the system to normal.

Severities are useful to quickly determine whether something requires a more complex response, or whether it requires a coordinated response at all. However, they are not a black and white definition of what constitutes a major incident. If something is not covered by our severity definitions - but you think it requires incident response - then it requires incident response. We only need to know one thing: Is this a major incident? The severity level can be determined later and isn't a requirement of triggering our response process.

## Mentality Shift
One of the more important concepts of our incident response process is the mentality shift that needs to be made during an incident. We typically call this the "Peacetime vs Wartime" mentality shift. The idea is that the decision making process changes when you are in an incident situation, and you are able to take riskier actions than you would normally consider during day-to-day operations. It can be hard for responders to grasp this concept, and your incident response process can be held up by responders who stick to the peacetime way of thinking to avoid proceeding with a potentially risky action. You can read more about peacetime vs wartime in the [Responder Training Guide](/training/subject_matter_expert/#wartime-vs-peacetime).

!!!info "Normal vs Emergency"
    Some people don't like the "Peacetime vs Wartime" analogy, in which case you can use any other terms you feel appropriate. "Normal vs Emergency" is a common choice, but you could equally use "OK vs Not OK". It's not terribly important what name you give it, the important part is to make the mentality shift.
