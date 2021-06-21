---
cover: assets/img/covers/security_incident.png
description: Checklist of actions for responding to a security incident at PagerDuty.
---
<div id="reviewed-dates">
  <span><strong>Last Reviewed:</strong> <abbr title="We recommend you include with this document the date you last reviewed your process.">YYYY-MM-DD</abbr></span>
  <span><strong>Last Tested:</strong> <abbr title="We recommend you include with this document the date you last tested your process.">YYYY-MM-DD</abbr></span>
</div>

!!! warning "Incident Commander Required"
     As with all major incidents at PagerDuty, security incidents will also involve an Incident Commander who will delegate the tasks to relevant responders. Tasks may be performed in parallel as assigned by the IC. Page one at the earliest possible opportunity `!ic page`.

!!! question "Not Sure it's a Security Incident?"
    Trigger the process anyway. It's better to be safe than sorry. The Incident Commander will make a determination on if response is needed.

## Checklist
Details for each of these items are available in the next section.

1. Stop the attack in progress.
1. Cut off the attack vector.
1. Assemble the response team.
1. Isolate affected instances.
1. Identify timeline of attack.
1. Identify compromised data.
1. Assess risk to other systems.
1. Assess risk of re-attack.
1. Apply additional mitigations, additions to monitoring, etc.
1. Forensic analysis of compromised systems.
1. Internal communication.
1. Involve law enforcement.
1. Reach out to external parties that may have been used as vector for attack.
1. External communication.

---

## Attack Mitigation
Stop the attack as quickly as you can, via any means necessary. Shut down servers, network isolate them, turn off a data center if you have to. Some common things to try,

* Shutdown the instance from the provider console (do not delete or terminate if you can help it, as we'll need to do forensics).
* If you happen to be logged into the box you can try to,
    * Reinstate our default iptables rules to restrict traffic.
    * `kill -9` any active session you think is an attacker.
    * Change root password and update /etc/shadow to lock out all other users.
    * `sudo shutdown now`

## Cut Off Attack Vector
Identify the likely attack vectors and path/fix them so they cannot be re-exploited immediately after stopping the attack.

* If you suspect a third-party provider is compromised, delete all accounts except your own (and those of others who are physically present) and immediately rotate your password and MFA tokens.
* If you suspect a service application was an attack vector, disable any relevant code paths, or shut down the service entirely.

## Assemble Response Team
Identify the key responders for the security incident and keep them all in the loop. Set up a secure method of communicating all information associated with the incident. Details on the incident (or even the fact that an incident has occurred) should be kept private to the responders until you are confident the attack is not being triggered internally.

* Page an Incident Commander if not already done so. They will also appoint the usual incident command roles. The incident command team will be responsible for keeping documentation of actions taken, and for notifying internal stakeholders as appropriate.
* Give the project an innocuous codename that can be used for chats/documents so if anyone overhears they don't realize it's a security incident. (e.g. sapphire-unicorn).
* Start the voice call if not already in progress.
* Setup chat room using the codename of the incident.
* Invite all responders to the voice call and chat room.
    1. The **security team should always be included**.
    1. A representative for any affected services should be included.
    1. Executive stakeholders and legal counsel should be invited at earliest possible opportunity, but prioritize operational responders first.
* Do not communicate with anyone not on the response team about the incident until forensics have been performed. The attack could be happening internally.
* Prefix all emails, and chat topics with "Attorney Work Project".

## Isolate Affected Instances
Any instances which were affected by the attack should be immediately isolated from any other instances. As soon as possible, an image of the system should be taken and put into a read-only cold storage for later forensic analysis.

* Blacklist the IP addresses for any affected instances from all other hosts.
* Turn off and shutdown the instances immediately if you didn't do that to stop the attack.
* Take a disk image for any disks attached to the instances, and ship them to an off-site cold storage location. You should make sure these images are read-only and cannot be tampered with.

## Identify Timeline of Attack
Work with all tools at your disposal to identify the timeline of the attack, along with exactly what the attacker did.

* Any reconnaissance the attacker performed on the system before the attack started.
* When the attacker gained access to the system.
* What actions the attacker performed on the system, and when.
* Identify how long the attacker had access to the system before they were detected, and before they were kicked out.
* Identify any queries the attacker ran on databases.
* Try to identify if the attacker still has access to the system via another back door. Monitor logs for unusual activity, etc.

## Compromised Data
Using forensic analysis of log files, time-series graphs, and any other information/tools at your disposal, attempt to identify what information was compromised (if any),

* Identify any data that was compromised during the attack.
    * Was any data exfiltrated from a database?
    * What keys were on the system that are now considered compromised?
    * Was the attacker able to identify other components of the system (map out the network, etc)?
* Find exactly what customer data has been compromised, if any.

## Assess Risk
Based on the data that was compromised, assess the risk to other systems.

* Does the attacker have enough information to find another way in?
* Were any passwords or keys stored on the host? If so, they should be considered compromised regardless of how they were stored.
* Any user accounts that were used in the initial attack should rotate all of their keys and passwords on every other system they have an account.

## Apply Additional Mitigations
Start applying mitigations to other parts of your system.

* Rotate any compromised data.
* Identify any new alerting which is needed to notify of a similar breach.
* Block any IP addresses associated with the attack.
* Identify any keys/credentials that are compromised and revoke their access immediately.

## Forensic Analysis
Once you are confident the systems are secured, and enough monitoring is in place to detect another attack, you can move onto the forensic analysis stage.

* Take any read-only images you created, any access logs you have, and comb through them for more information about the attack.
* Identify exactly what happened, how it happened, and how to prevent it in future.
* Keep track of all IP addresses involved in the attack.
* Monitor logs for any attempt to regain access to the system by the attacker.

## Internal Communication
**Delegate to:** VP or Director of Engineering

Communicate internally only once you are confident (via forensic analysis) that the attack was not sourced internally.

* Don't go into too much detail.
* Overview the timeline.
* Discuss mitigation steps taken.
* Follow up with more information once it is known.

## Liaise With Law Enforcement / External Actors
**Delegate to:** VP or Director of Engineering

Work with law enforcement to identify the source of the attack, letting any system owners know that systems under their control may be compromised, etc.

* Contact local law enforcement.
* Contact the FBI.
* Contact operators for any systems used in the attack, their systems may also have been compromised.
* Contact security companies to help in assessing risk and any PR next steps.
* Contact your cyber insurance provider.

## External Communication
**Delegate to:** Marketing Team

Once you have validated all of the information you have is accurate, have a timeline of events, and know exactly what information was compromised, how it was compromised, and sure that it won't happen again. Only then should you prepare and release a public statement to customers informing them of the compromised information and any steps they need to take.

* Include the date in the title of any announcement so that it's never confused for a potential new breach.
* Don't say "We take security very seriously." It makes everyone cringe when they read it.
* Be honest, accept responsibility, and present the facts, along with exactly how we plan to prevent such things in future.
* Be as detailed as possible with the timeline.
* Be as detailed as possible in what information was compromised and how it affects customers. If we were storing something we shouldn't have been, be honest about it. It'll come out later and it'll be much worse.
* Don't name and shame any external parties that might have caused the compromise. It's bad form. (Unless they've already publicly disclosed, in which case we can link to their disclosure).
* Release the external communication as soon as possible, preferably within a few days of the compromise. The longer you wait, the worse it will be.
* If possible, get in touch with customers' internal security teams before the general public notice is sent.

---

## Communicating During an Incident

* Prefer voice call and Slack over any other methods.
* Avoid email, but if you absolutely need to for some reason,
    * Subject of emails should be "Attorney Work Project" and nothing else.
    * If the email chain has **ANY** contacts **not with the @pagerduty.com domain**, make sure your emails are encrypted.
* Do not use SMS to communicate about the incident.
    * The only exception is to tell someone to move to a more secure channel. e.g. "Please join Slack ASAP."
* Do not disseminate anything about the incident to those outside the response team until you have approval to do so.

---

## Additional Reading

* [Computer Security Incident Handling Guide](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf) (NIST)
* [Incident Handler's Handbook](https://www.sans.org/reading-room/whitepapers/incident/incident-handlers-handbook-33901) (SANS)
* [Responding to IT Security Incidents](https://docs.microsoft.com/en-us/previous-versions/tn-archive/cc700825(v=technet.10)) (Microsoft)
* [Defining Incident Management Processes for CSIRTs: A Work in Progress](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=7153) (CMU)
* [Creating and Managing Computer Security Incident Handling Teams (CSIRTS)](https://www.first.org/conference/2008/papers/killcrece-georgia-slides.pdf) (CERT)
