---
cover: assets/img/covers/incident_response_docs.png
hero: assets/img/headers/pagerduty_logo.png
hero_alt_text: PagerDuty
---
This site documents parts of the PagerDuty Incident Response process. It is a cut-down version of our internal documentation, used at PagerDuty for any major incidents, and to prepare new employees for on-call responsibilities. It provides information not only on preparing for an incident, but also what to do during and after.

Few companies seem to talk about their internal processes for dealing with major incidents. We would like to change that by opening up our documentation to the community, in the hopes that it proves useful to others who may want to formalize their own processes. Additionally, it provides an opportunity for others to suggest improvements, which ends up helping everyone.

## What is this?

A collection of pages detailing how to efficiently deal with any major incidents that might arise, along with information on how to go on-call effectively. It provides lessons learned the hard way, along with training material for getting you up to speed quickly.

## Who is this for?

It is intended for on-call practitioners and those involved in an operational incident response process, or those wishing to enact a formal incident response process.

## Why do I need it?

Incident response is something you hope to never need, but when you do, you want it to go smoothly and seamlessly. Normally the knowledge of how to handle incidents within your company will be built up over time, getting better with each incident. While tools such as [PagerDuty's Major Incidents Application](https://www.pagerduty.com/applications/#major-incidents-application) can help you recover quickly, the process you follow is just as important. This documentation will allow you to learn from the start something which has taken us years to build up. Giving you a head start on how to deal with major incidents in a way which leads to the fastest possible recovery time.

## What is covered?

Anything from preparing to [go on-call](oncall/being_oncall.md), definitions of [severities](before/severity_levels.md), incident [call etiquette](before/call_etiquette.md), all the way to how to run a [postmortem](after/post_mortem_process.md), and providing our [postmortem template](after/post_mortem_template.md). We even include our [security incident response process](during/security_incident_response.md).

## What is missing?

This isn't an exact clone of our internal documentation, but instead has some information removed. Things such as our phone bridge numbers, names of internal tools and systems which are not (yet) open sourced, images of our dashboards, etc. Basically anything that is specific to PagerDuty or is too sensitive to share.

## License

This documentation is provided under the Apache License 2.0. In plain English that means you can use and modify this documentation and use it both commercially and for private use. However, you must include any original copyright notices, and the original LICENSE file.

Whether you are a PagerDuty customer or not, we want you to have the ability to use this documentation internally at your own company. You can view the source code for all of this documentation on our GitHub account, feel free to fork the repository and use it as a base for your own internal documentation.
