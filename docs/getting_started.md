---
cover: assets/img/covers/getting_started.png
description: This 'Getting Started' guide will help you to navigate the most important parts of our process, and provide some guidelines about which bits we think you should start with. If you're just starting out with your own incident response process, this is a great way to know what order we think you should do things in.
hero: assets/img/headers/getting_started.jpg
hero_alt_text: Getting Started
hero_credit_url: https://www.pexels.com/photo/young-game-match-kids-2923/
hero_credit_url_text: Pexels
hero_credit_text: Breakingpic
---
If you don't yet have a process in your own organization, or if you're just starting out, you may find the sheer quantity of information in this documentation overwhelming. It's important to remember that this **isn't something you'll be able to implement overnight**. This is a process that should be built up over time. While it took us years to get to this point, our hope is that you can make use of this documentation to skip some of the awkward growing pains we went through and reach a more mature incident response process in the most efficient way possible.

To that end, we've put together this "Getting Started" guide to help you navigate the most important parts of our process and provide some guidelines about which bits we think you should start with. If you're just starting out with your own incident response - process, this is a great way to know what order we think you should do things in.

## Define what an "Incident" and "Major Incident" are for you.

You don't have to use [our definitions](before/severity_levels.md), they're just a starting point. Feel free to come up with whatever you want. The point is that the definition should be a short, simple statement that ensures everyone is on the same page. The goal is to remove any discussion around whether something is an incident or not during your response process. If you have a metric to use (e.g. "if errors go above 100/minute it's a major incident"), that's great. If not, don't let that stop you from defining what a major incident is.

The reason this should be your first step is because you can't respond to an incident until you know what an incident is. If one person considers something an incident but the rest of the organization doesn't, that will create ambiguity and confusion during any sort of incident response. Having a clear definition that's disseminated to your entire organization ensures that everyone has the same understanding and will prevent any confusion.

!!! question "What about severity levels?"
    You shouldn't need to worry about severity levels at the beginning - just whether something is an incident or not. You can add severity levels later once you flesh out your response process a bit more.

## Determine how you mobilize responders.

What is going to trigger your incident response process? Will it be an automated alert tied to a metric? That's a great place to start, even if it's just a single alert that goes out to a group of responders.

!!! tip "Have a way to manually trigger incident response."
    Having a way for humans to manually trigger incident response when they see something wrong will help improve your response times. It took us a while to do this, but if we could go back in time, we'd do this from the start!

Make sure to set up a phone bridge and chat room dedicated for incident response. You want to prepare this in advance, and make sure the numbers and connection information are written down and shared with anyone who may need to respond. You don't want to be setting up the call and chat room while trying to respond to an incident. You should make the call and room names static or as easily discoverable as possible.

You also want to [set expectations for your responders](oncall/being_oncall.md). Make sure they know that they need to join the call and chat room if they get paged and that they shouldn't just jump into solving the problem.

Finally, you want to make sure your [alerts are actionable](oncall/alerting_principles.md). There's nothing worse than waking everyone up for something you cannot control. Make sure anything that is going to trigger your incident response and page people is something that requires **immediate human action** to resolve.

## Define the incident response roles.

You will only care about the [Incident Commander](before/different_roles.md#incident-commander-ic) role to begin with. If you have enough people, you can also have a [Scribe](before/different_roles.md#scribe). But to start, just have an Incident Commander and your responders. The Incident Commander shouldn't be taking any remediation actions at all, they should just be leading the response and making the decisions. You don't need to follow the entire [training guide](training/incident_commander.md) to begin with; just the basics of asking questions and assigning tasks are enough to get you started.

## Create a postmortem template.
You can use [our template](after/post_mortem_template.md) to get started or come up with your own version. Just make sure that you have a structured template so that it makes it easier to compare incidents to each other. It can be as simple as three headings to begin with:

1. What happened?
1. Why did it happen?
1. How are we going to make sure it doesn't happen again?.

Adding more detailed fields and information can come later.

!!! tip "Naming Doesn't Matter"
    You don't need to call them "Postmortem's." After-action review, learning review, retrospective, etc. are all valid names. The point is that you review what happened and learn from it. The name you give to the process doesn't really matter.

## Practice

Run a fake incident, mobilize your responders, and have someone act as the Incident Commander. Get used to the switch from normal day-to-day operations and the emergency operations of an incident. Switching to having an Incident Commander running the show can be jarring at first, so it helps to practice it in a low-risk situation to begin with.

Playing a game of "[Keep Talking and Nobody Explodes](https://www.keeptalkinggame.com/)" is a light-hearted way of practicing the skills required for incident response. You can also run your own version of [Failure Friday](https://www.pagerduty.com/blog/failure-fridays-four-years/), where you manually inject some failure into your system and treat it as a major incident.

## Use it for a real incident.

Once you have the basics in place, you can start using the process for a real incident. The more you use it, the more natural it will become. As you use it more and more, you can add more processes into it and tweak it for your needs as necessary. Things may not go smoothly the first time, but don't give up!

## What comes next?

You can now start expanding your process and adding some more things. Here are our recommendations for the next things you should incorporate:

### Add a Scribe if you haven't already.

Keeping an accurate timeline of events becomes really important when you want to go back and review your incidents. A [Scribe](before/different_roles.md#scribe) should be the next role you start using.

### Expand your IC rotation.

You don't want to just have a single IC, you want to have as many as you can get. Start training up more people and create an on-call rotation for it. At first, you will probably use weekly rotations. We recommend trying to get to a daily rotation as quickly as you can.

### Add in a Deputy as a role.

Once you have a few more IC's, start adding a Deputy to your response. Having a [Deputy](before/different_roles.md#deputy) will give you the ability to quickly hand over during longer incidents and also gives the IC some backup for shorter incidents.

### Define severity levels.

Once you have the process working well, you can start to add more granularity to your response and incident definitions. Perhaps you don't want to do a "full" response for certain incidents. Define some [severity levels](before/severity_levels.md) to document the level of response you want.

### Start adding other roles.

As your process becomes more established, you want to start adding other roles. We recommend a [Customer Liaison](before/different_roles.md#customer-liaison) as the next one you include.

### Practice, practice, practice.

It cannot be overstated how much it helps to practice your incident response. If you trigger incident response and realize it's not really an incident, treat it as one anyway. You've already mobilized your responders, so it's essentially free practice.

### Define a process for larger incidents.
We call these [complex incidents](before/complex_incidents.md). You won't use this often, but you'll want the phone bridge numbers and chat rooms prepared ahead of time. You'll also want to make sure your responders are aware of the process.
