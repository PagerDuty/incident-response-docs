---
cover: assets/img/covers/incident_response_docs.png
---
![Incident Response at Elimu Informatics](./assets/img/headers/pagerduty_ir.jpg)

This documentation covers parts of the Elimu Informatics Incident Response process. It is a cut-down version of our internal documentation, used at Elimu Informatics for any major incidents, and to prepare new employees for on-call responsibilities. It provides information not only on preparing for an incident, but also what to do during and after. It is intended to be used by on-call practitioners and those involved in an operational incident response process (or those wishing to enact a formal incident response process). See the [about page](about.md) for more information on what this documentation is and why it exists.

!!! tip "Don't know where to start?"
    If you're new to incident response and don't yet have a formal process in your organization, we recommend looking at our [Getting Started](/getting_started.md) page for a quick list of things you can do to begin, and our [Training Course](training/courses/incident_response.md) page for a more detailed overview of our process.

## Being On-Call

If you've never been on-call before, you might be wondering what it's all about. These pages describe what the expectations of being on-call are, along with some resources to help you.

* [Being On-Call](oncall/being_oncall.md) - _A guide to being on-call, both what your responsibilities are, and what they are not._
* [Alerting Principles](oncall/alerting_principles.md) - _The principles we use to determine what things page an engineer, and what time of day they page._

## Before an Incident

Reading material for things you probably want to know before an incident occurs. You likely don't want to be reading these during an actual incident.

* [What is an Incident?](before/what_is_an_incident.md) - _Before we can talk about incident response, we need to define what an incident actually is._
* [Severity Levels](before/severity_levels.md) - _Information on our severity level classification. What constitutes a SEV-3 vs SEV-1? What response do they get?_
* [Different Roles for Incidents](before/different_roles.md) - _Information on the roles during an incident; Incident Commander, Scribe, etc._
* [Incident Call Etiquette](before/call_etiquette.md) - _Our etiquette guidelines for incident calls, before you find yourself in one._
* [Complex Incidents](before/complex_incidents.md) - _Our guide for handling larger, more complex incidents._

## During an Incident

Information and processes during a major incident.

* [During an Incident](during/during_an_incident.md) - _Information on what to do during an incident, and how to constructively contribute._
* [Security Incident Response](during/security_incident_response.md) - _Security incidents are handled differently to normal operational incidents._

## After an Incident

Our followup processes, how we make sure we don't repeat mistakes and are always improving.

* [After an Incident](after/after_an_incident.md) - _Information on what to do after an incident is resolved._
* [Post-Mortem Process](after/post_mortem_process.md) - _Information on our post-mortem process; what's involved and how to write or run a post-mortem._
* [Post-Mortem Template](after/post_mortem_template.md) - _The template we use for writing our post-mortems for major incidents._
* [Effective Post-Mortems](after/effective_post_mortems.md) - _A guide for writing effective post-mortems._

## Training

So, you want to learn about incident response? You've come to the right place.

* [Training Overview](training/overview.md) - _An overview of our training guides and additional training material from third-parties._
* [Glossary of Incident Response Terms](training/glossary.md) - _A collection of terms that you may hear being used, along with their definition._

### Training Guides

* [Incident Commander Training](training/incident_commander.md) - _A guide to becoming our next Incident Commander._
* [Deputy Training](training/deputy.md) - _How to be a deputy and back up the Incident Commander._
* [Scribe Training](training/scribe.md) - _A guide to scribing._
* [Subject Matter Expert Training](training/subject_matter_expert.md) - _A guide on responsibilities and behavior for all participants in a major incident._
* [Customer Liaison Training](training/customer_liaison.md) - _A guide on how to act as our public representative during an incident._
* [Internal Liaison Training](training/internal_liaison.md) - _A guide on how to liaise with internal teams during an incident._

### Training Courses

* [Incident Response Training Course](training/courses/incident_response.md) - _An introductory course on incident response and the role of the Incident Commander._

## Additional Resources

Useful material and resources from external parties that are relevant to incident response.

* [Reading](resources/reading.md) - _Recommended reading material relevant to incident response._
* [ChatOps](resources/chatops.md) - _Description of the chat bot commands we've referenced in this documentation._
* [Anti-Patterns](resources/anti_patterns.md) - _List of things we've tried and then rejected, learn from our mistakes._
