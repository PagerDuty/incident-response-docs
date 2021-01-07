---
cover: assets/img/covers/training_overview.png
title: Training Overview
description: Learning about the PagerDuty major incident response process is an important part of being an effective on-call engineer at PagerDuty. This section goes over our training material for the various roles that are involved in our incident response, along with some additional information and training material from government agencies.
---
Learning about the PagerDuty major incident response process is an important part of being an effective on-call engineer at PagerDuty. This section goes over our training material for the various roles that are involved in our incident response, along with some additional information and training material from government agencies.

## Training Guides
Our training guides are split up by role, however you are encouraged to read through the training guides even for roles you don't belong to, as it can give you some good insight into how those people will be behaving during major incidents.

* [Incident Commander Training](/training/incident_commander.md) - The "IC" is the person who drives a major incident to resolution. They're the person who will be directing everyone else.
* [Deputy Training](/training/deputy.md) - The Deputy is someone who supports the Incident Commander and can take over for them if necessary.
* [Scribe Training](/training/scribe.md) - This is intended for individuals who will be acting as a scribe during an incident.
* [SME / Resolver Training](/training/subject_matter_expert.md) - This is relevant to everyone at PagerDuty who are on-call for any team.
* [Customer Liaison Training](/training/customer_liaison.md) - This is for individuals who will be publicly representing us and interacting with customers.
* [Internal Liaison Training](/training/internal_liaison.md) - This is relevant for anyone who might be called upon to work with teams internal during an incident.

## Training Courses
We've also published slides and videos of some of our training courses. Originally used internally at PagerDuty to train our staff, we've since adapted them for a wider audience so you can make use of them in your own organizations.

* [Incident Response Training Course](/training/courses/incident_response.md) - Introductory course on incident response and the role of the Incident Commander.

## Example Incident
This recorded call is a reenactment of an actual major incident that occurred at PagerDuty in [January 2017](https://status.pagerduty.com/incidents/510k1bnvwv6g). Some details have been changed in the interest of brevity and privacy, but the incident remains otherwise largely intact. For more details about the recording, you can read the [PagerDuty blog post](https://www.pagerduty.com/blog/incident-response-reenactment/).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vw6I5DYWkNA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## National Incident Management System (NIMS)
Our incident response process is loosely based on the [US National Incident Management System (NIMS)](https://www.fema.gov/national-incident-management-system), which is described as,

  _A systematic, proactive approach to guide departments and agencies at all levels of government, nongovernmental organizations, and the private sector to work together seamlessly and manage incidents involving all threats and hazards—regardless of cause, size, location, or complexity—in order to reduce loss of life, property, and harm to the environment._

While it might not initially seem that this would be applicable to an IT operations environment, we've found that many of the lessons learned from major incidents in these situations can be directly applied to our industry too. The principles are the same and span many different environments.

[![NIMS](../assets/img/thumbnails/nims_core.png)](https://www.fema.gov/pdf/emergency/nims/NIMS_core.pdf) [![NIMS Training](../assets/img/thumbnails/nims_training.png)](https://www.fema.gov/pdf/emergency/nims/nims_training_program.pdf)

If you want to learn more about NIMS, we recommend the [ICS-100](https://training.fema.gov/is/courseoverview.aspx?code=IS-100.b) and [ICS-700](https://training.fema.gov/is/courseoverview.aspx?code=IS-700.a) online training courses, which go over NIMS and the Incident Command System (You can also take an online examination after training in order to get a certificate from FEMA). There is also a wealth of [additional training material and courses from FEMA](https://training.fema.gov/nims/) on NIMS, which I would encourage you to look at.

If you're based in the US and interested in taking a more active incident response role in your community, we recommend investigating your local [CERT programs](https://www.fema.gov/community-emergency-response-teams) (Community Emergency Response Teams). Many cities offer CERT training, after which you can volunteer as a CERT contributor within your community. Not only is it an opportunity to get real world experience with disaster response, but the skills you learn can be applied to everyday life too.

Also take a look at the [Additional Reading](/resources/reading) page.

## Incident Response Around the World
While NIMS is the US incident response framework, many countries have their own similar frameworks. Some are based on the US system, but many were developed on their own. There's a wealth of additional information to be learned by investigating the methods and frameworks used in countries all over the world.

A book called "[Comparative Emergency Management: Understanding Disaster Policies, Organizations, and Initiatives from Around the World](https://training.fema.gov/hiedu/aemrc/booksdownload/compemmgmtbookproject/)" (available from the [FEMA website](https://training.fema.gov/hiedu/aemrc/)) compares the systems used by 30 or so different countries, and is an amazing collection of information on emergency management frameworks used around the world.

Here are a few of the systems we looked at in more detail in order to adapt and improve our own process at PagerDuty.

### United Kingdom

The United Kingdom emergency services use a command hierarchy called [**Gold-Silver-Bronze Command Structure**](https://en.wikipedia.org/wiki/Gold%E2%80%93silver%E2%80%93bronze_command_structure) for their major operations. The framework involves three levels responsible for strategic (gold), tactical (silver), and operational (bronze) command decisions.

Here are some useful reading materials if you're interested in learning more:

* [UK.GOV - Emergency Response and Recovery](https://www.gov.uk/guidance/emergency-response-and-recovery).
* [UK.GOV - Incident Command - 3rd Edition (2008)](https://www.gov.uk/government/publications/fire-and-rescue-manual-volume-1-incident-command).
* [UK Home Office - Critical Incident Management](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/735103/critical-incident-management-v12.0ext.pdf) (PDF).


### New Zealand

New Zealand's system is called the [**Coordinated Incident Management System (CIMS)**](https://en.wikipedia.org/wiki/Coordinated_Incident_Management_System) and is based upon the Incident Command System used in the US. One area we particularly liked from CIMS is its focus on common terminology, which helps prevents confusion during an incident and allows for a faster and more effective response. Some terminology has been changed from ICS (e.g. "Control" instead of "Command" to describe the management functions), but should still be familiar.

Here are some useful reading materials if you're interested in learning more:

* [Ministry of Civil Defence & Emergency Management - New Zealand Coordinated Incident Management System (CIMS)](https://www.civildefence.govt.nz/resources/new-zealand-coordinated-incident-management-system-cims-2nd-edition/) ([PDF](https://www.civildefence.govt.nz/assets/Uploads/publications/CIMS-2nd-edition.pdf)).
* [Devereux-Blum Training & Development - Emergency Management Training](https://www.emergencymanagement.co.nz/)

### Australia

Australia uses a system called the [**Australasian Inter-Service Incident Management System (AIIMS)**](https://en.wikipedia.org/wiki/Australasian_Inter-Service_Incident_Management_System) which is a derivative of the NIMS framework used in the US. While based on ICS, AIIMS puts a bigger focus on _span of control_ than other frameworks. As with New Zealand's system, there are some differences to the terminology being used (e.g. "Incident Controller" instead of "Incident Commander"), but it should still be familiar to those who know ICS.

Here are some useful reading materials if you're interested in learning more:

* [The Australasian Inter-Service Incident Management System, 3rd Edition](https://training.fema.gov/hiedu/docs/cem/comparative%20em%20-%20session%2021%20-%20handout%2021-1%20aiims%20manual.pdf) (PDF).
* [Incident Management in Australia Handbook](https://knowledge.aidr.org.au/resources/handbook-14-incident-management-in-australia/)

### Canada

Canada uses their own [**Incident Command System**](http://www.icscanada.ca/images/upload//ICS%20OPS%20Description2012.pdf) (PDF). The standard for which is maintained by a network of organizations called [ICS Canada](http://www.icscanada.ca/en/home.html). Their website has a collection of information on how you can find local training courses in Canada, depending on your Province.

Here are some useful reading materials if you're interested in learning more:

* [ICSCanada - I-100 Introduction to Incident Command System](http://www.aema.alberta.ca/documents/studentreferencenote86439.pdf) (PDF).
* [Canada ICS Forms](http://www.icscanada.ca/en/Forms.html) - _Standard ICS forms that you can download and use in your own incidents ([FEMA has the US equivalents](https://training.fema.gov/icsresource/icsforms.aspx))._
