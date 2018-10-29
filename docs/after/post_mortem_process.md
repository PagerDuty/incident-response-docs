---
cover: assets/img/covers/post-mortem_process.png
description: For every major incident (SEV-2/1), we need to follow up with a post-mortem. A blame-free, detailed description, of exactly what went wrong in order to cause the incident, along with a list of steps to take in order to prevent a similar incident from occurring again in the future.
---
![Post-Mortem](../assets/img/headers/pagerduty_post_mortem.jpg)

For every major incident (SEV-2/1), we need to follow up with a post-mortem. A blame-free, detailed description, of exactly what went wrong in order to cause the incident, along with a list of steps to take in order to prevent a similar incident from occurring again in the future. The incident response process itself should also be included.

!!! warning "Don't Neglect the Post-Mortem"
    Don't make the mistake of neglecting a post-mortem after an incident. Without a post-mortem you fail to recognize what you're doing right, where you could improve, and most importantly, how to avoid making the same exact mistakes next time around. A well-designed, blameless post-mortem allows teams to continuously learn, and serves as a way to iteratively improve your infrastructure and incident response process.

## Owner Designation
The first step is that a post-mortem owner will be designated. This is done by the IC either at the end of a major incident call, or very shortly after. You will be notified directly by the IC if you are the owner for the post-mortem. The owner is responsible for populating the post-mortem, looking up logs, managing the followup investigation, and keeping all interested parties in the loop. Please use Slack for coordinating followup. A detailed list of the steps is available below,

## Owner Responsibilities
As owner of a post-mortem, you are responsible for the following,

* Scheduling the post-mortem meeting (on the shared calendar) and inviting the relevant people (this should be **scheduled within 3 calendar days** for a SEV-1 and **5 business days** for a SEV-2).
* Investigating the incident, pulling in whomever you need from other teams to assist in the investigation.
* Updating the page with all of the necessary content.
* Creating follow-up JIRA tickets (_You are only responsible for creating the tickets, not following them up to resolution_).
* Reviewing the post-mortem content with appropriate parties before the meeting.
* Running through the topics at the post-mortem meeting (the IC will "run" the meeting and keep the discussion on track, but you will likely be doing most of the talking).
* Communicating the results of the post-mortem internally.

## Status Descriptions
Our post-mortems have a "Status" field which indicates where in our process the post-mortem currently is. Here's a description of the values and how we use them.

| Status | Description |
|-|-|
| **Draft** | Indicates that the content of the post-mortem is still being worked on. |
| **In Review** | The content of the post-mortem has been completed, and is ready to be reviewed during the post-mortem meeting. |
| **Reviewed** | The meeting is over and the content has been reviewed and agreed upon.<br/>If there is an "External Message", the Customer Support team will take the message and update our status page as appropriate. |
| **Closed** | No further actions are needed on the post-mortem (outstanding issues are tracked in JIRA).<br/>If no "External Message", you can skip straight to this once the meeting is over.<br/>If there's an "External Message", then the Support team will update it to this status once the message is posted. |

## Post-Mortem
Once you've been designated as the owner of a post-mortem, you should start creating one and updating it with all the relevant information.

1. (If not already done by the IC) Create a new post-mortem for the incident.

1. Schedule a post-mortem meeting for within **3 calendar days** for a SEV-1 and **5 business days** for a SEV-2. You should schedule this before filling in the post-mortem, just so it's on the calendar.
    * Create the meeting on the "Incident Post-Mortem Meetings" shared calendar.

1. Begin populating the page with all of the information you have.
    * The timeline should be the main focus to begin with.
        * The timeline should include important changes in status/impact, and also key actions taken by responders.
    * Go through the history in Slack to identify the responders, and add them to the page.
        * Identify the Incident Commander and Scribe in this list.

1. Populate the post-mortem with more detailed information.
    * For each item in the timeline, identify a metric, or some third-party page where the data came from. This could be a link to a Datadog graph, a SumoLogic search, a Tweet, etc. Anything which shows the data point you're trying to illustrate in the timeline.
    * Add a link to the incident call recording.

1. Perform an analysis of the incident.
    * Capture all available data regarding the incident. What caused it, how many customers were affected, etc.
        * Any commands or queries you use to look up data should be posted in the page so others can see how the data was gathered.
    * Capture the impact to customers (generally in terms of event submission, delayed processing, and slow notification delivery)
    * Identify the underlying cause of the incident (What happened, and _why_ did it happen).

1. Write the external message that will be sent to customers. This will be reviewed during the post-mortem meeting before it is sent out.
    * Avoid using the word "outage" unless it really was a full outage, use the word "incident" or "service degradation" instead. Customers generally see "outage" and assume the worst.
    * Look at other examples of previous post-mortems to see the kind of thing you should send.

1. Post a link to the post-mortem into Slack to be reviewed for style and content by internal parties, you should try to do this about **24 hours before** the meeting is scheduled.
    * Experienced post-mortem writers will give you feedback on the level of detail and content of the post-mortem. This avoids wasted time during the meeting.

1. Attend the post-mortem meeting (see below section for more information).

1. Create any followup action JIRA tickets (or note down topics for discussion if we need to decide on a direction to go before creating tickets),
    * Go through the history in Slack to identify any TODO items.
    * Label all tickets with their severity level and date tags.
    * Any actions which can reduce re-occurrence of the incident.
        * (There may be some trade-off here, and that's fine. Sometimes the ROI isn't worth the effort that would go into it).
    * Identify any actions which can make our incident response process better.
    * Be careful with creating too many tickets. Generally we only want to create things that are P0/P1's. Things that absolutely should be dealt with.

1. Communicate internally so we can learn from the incident.
    * Send out an internal email to the relevant stakeholders describing the results and key learnings.
    * Include a link to the post-mortem.

## Post-Mortem Meeting
These meetings should generally last 15-30 minutes, and are intended to be a wrap up of the post-mortem process. We should discuss what happened, what we could've done better, and any followup actions we need to take. The goal is to suss out any disagreement on the facts, analysis, or recommended actions, and to get some wider awareness of the problems that are causing reliability issues for us.

You should invite the following people to the post-mortem meeting,

* Always
    * The incident commander.
    * The incident commander shadowee (if there was one).
    * Service owners involved in the incident.
    * Key engineer(s)/responders involved in the incident.
    * Engineering manager for impacted systems.
    * Product manager for impacted systems. 
* Optional
    * Customer liaison. (Only SEV-1 incidents)

The incident commander will run the meeting, keeping the discussion focused and on track. However the post-mortem owner will likely be doing most of the talking as they walk through the post-mortem report.

A general agenda for the meeting would be something like,

1. Recap the timeline, to make sure everyone agrees and is on the same page.
1. Recap important points, and any unusual items.
1. Discuss how the problem could've been caught.
    * Did it show up in [canary](https://www.pagerduty.com/blog/continuous-build-break-fix-fast#canary-releases)?
    * Could it have been caught in tests, or loadtest environment?
1. Discuss customer impact. Any comments from customers, etc.
1. Review action items that have been created, discuss if appropriate, or if more are needed, etc.

## Examples
Here are some examples of post-mortems from other companies as a reference,

* [Stripe](https://support.stripe.com/questions/outage-postmortem-2015-10-08-utc)
* [LastPass](https://blog.lastpass.com/2015/06/lastpass-security-notice.html/comment-page-2/)
* [AWS](https://aws.amazon.com/message/5467D2/)
* [Twilio](https://www.twilio.com/blog/2013/07/billing-incident-post-mortem-breakdown-analysis-and-root-cause.html)
* [Heroku](https://status.heroku.com/incidents/151)
* [Netflix](http://techblog.netflix.com/2012/10/post-mortem-of-october-222012-aws.html)
* [GOV.UK Rail Accident Investigation](https://www.gov.uk/government/publications/kyle-beck-safety-digest/near-miss-at-kyle-beck-3-august-2016)
* [A List of Post-mortems!](https://github.com/danluu/post-mortems)

## Useful Resources

* [Advanced PostMortem Fu and Human Error 101 (Velocity 2011)](http://www.slideshare.net/jallspaw/advanced-postmortem-fu-and-human-error-101-velocity-2011)
* [Blame. Language. Sharing.](http://fractio.nl/2015/10/30/blame-language-sharing/)
