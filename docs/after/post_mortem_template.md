This is a standard template we use for post-mortems at PagerDuty. Each section describes the type of information you will want to put in that section.

---

!!! note "Guidelines"
    This page is intended to be reviewed during a post-mortem meeting that should be scheduled within 5 business days of any event.
    Your first step should be to schedule the post-mortem meeting in the shared calendar for within 5 business days after the incident.
    Don't wait until you've filled in the info to schedule the meeting, however make sure the page is completed by the meeting.

** Post-Mortem Owner:** _Your name goes here._

** Meeting Scheduled For:** _Schedule the meeting on the "Incident Post-Mortem Meetings" shared calendar, for within 5 business days after the incident. Put the date/time here._

** Call Recording:** _Link to the incident call recording._

## Overview
_Include a **short** sentence or two summarizing the root cause, timeline summary, and the impact. E.g. "On the morning of August 99th, we suffered a 1 minute SEV-1 due to a runaway process on our primary database machine. This slowness caused roughly 0.024% of alerts that had begun during this time to be delivered out of SLA."_

## What Happened
_Include a short description of what happened._

## Root Cause
_Include a description of the root cause. If there were any actions taken that exacerbated the issue, also include them here with the intention of learning from any mistakes made during the resolution process._

## Resolution
_Include a description what solved the problem. If there was a temporary fix in place, describe that along with the long-term solution._

## Impact
_Be very specific here, include exact numbers._

| | |
|-|-|
| Time in SEV-1 | ?mins |
| Time in SEV-2 | ?mins |
| Notifications Delivered out of SLA | ??% (?? of ??) |
| Events Dropped / Not Accepted | ??% (?? of ??) _Should usually be 0, but always check_ |
| Accounts Affected | ?? |
| Users Affected | ?? |
| Support Requests Raised | ?? _Include any relevant links to tickets_ |

## Responders

* _Who was the IC?_
* _Who was the scribe?_
* _Who else was involved?_
* _Who else was involved?_

## Timeline
_Some important times to include: (1) time the root cause began, (2) time of the page, (3) time that the status page was updated (i.e. when the incident became public), (4) time of any significant actions, (5) time the SEV-2/1 ended, (6) links to tools/logs that show how the timestamp was arrived at._

| Time (UTC) | Event | Data Link |
| ---------- | ----- | --------- |

## How'd We Do?

### What Went Well?

* _List anything you did well and want to call out. It's OK to not list anything._

### What Didn't Go So Well?

* _List anything you think we didn't do very well. The intent is that we should follow up on all points here to improve our processes._

## Action Items
_Each action item should be in the form of a JIRA ticket, and each ticket should have the same set of two tags:  “sev1_YYYYMMDD” (such as sev1_20150911) and simply “sev1”. Include action items such as: (1) any fixes required to prevent the root cause in the future, (2) any preparedness tasks that could help mitigate the problem if it came up again, (3) remaining post-mortem steps, such as the internal email, as well as the status-page public post, (4) any improvements to our incident response process._

## Messaging

### Internal Email
_This is a follow-up for employees. It should be sent out right after the post-mortem meeting is over. It only needs a short paragraph summarizing the incident and a link to this wiki page._

> Briefly summarize what happened and where the post-mortem page (this page) can be found.

### External Message
_This is what will be included on the status.pagerduty.com website regarding this incident. What are we telling customers, including an apology? (The apology should be genuine, not rote.)_

> Summary

> What Happened?

> What Are We Doing About This?
