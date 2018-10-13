---
cover: assets/img/covers/anti-patterns.png
description: These are some processes that we've found do not work well. We've either tried them in the past and regretted it, or spent considerable time thinking about them and ultimately rejected them. We want to document them to make sure we don't repeat mistakes or wonder why a decision was made later down the line.
---
!!! warning "Process Anti-Patterns"
    These are some processes that we've found do not work well. We've either tried them in the past and regretted it, or spent considerable time thinking about them and ultimately rejected them. We want to document them to make sure we don't repeat mistakes or wonder why a decision was made later down the line. The list is in no particular order.

## Getting everyone on the call.

Believe it or not, we used to page every single engineer at PagerDuty when we had a SEV-2 incident. If a SEV-2 happened at 3am, then we'd be paging the entire engineering department at 3am. There a few reasons we went down this path,

1. When the company was smaller, there were only a few engineers. So this process worked well, since you really did need every engineer on the call.
1. Rather than triaging an incident and then having to page in additional people, if everyone is on the call to begin with then the thinking was that we'd get a faster response.

As we grew our engineer department, this did not scale well at all, and problems quickly became apparent,

1. Most of the people on the call had nothing to do. They'd been woken up for no reason.
1. Paging people has a cost impact. Both in employee health, and in finance. Waking up your entire engineering department at 3am means nothing productive is going to be done the next day, across the entire department.
1. People who weren't on-call would still get paged.

It's important to maintain an **effective span of control** on any incident response. If you have more than 7 or 8 people directly reporting to the [Incident Commander]() things can quickly get overwhelming. We now will only page the engineers who are on-call for a specific service, rather than the entire team. If more responders are required, then they will be mobilized by the [Internal Liaison]() to join the response. 9 times out of 10 we don't need additional responders, so the rest of the engineering department can get some rest without interference. This results in a happier engineering department and a more streamlined response process.

## Forcing everyone to stay on the call.

Our original thinking was that if you've been mobilized onto a response call, then we would need you to stick around until the end, since if you were needed at one point, chances are you'll be needed again before the incident is resolved. Unfortunately, we've since found that that's never really the case. Typically someone will be mobilized to investigate a specific system, or perform a specific action, after which time there would be nothing further required from them. We'd have a call full of people who weren't doing anything and could've gone back to sleep. This can also encourage 'hero' mentalities where individuals feel pressured that they have to stay on a call.

Now we ask people to leave the call if they're no longer needed. Once the Incident Commander has ascertained which systems are impacted, they let representatives for the other systems leave the call so they can get some rest. You can always mobilize them again if they're really needed. Most of the time they won't be needed again, so we're optimizing for the 99% case.

## Too frequent status updates.

Executives need to know what's going on and want to be provided status updates every 5 minutes to keep them in the loop. The problem with this is that you'll spend the entire time providing status updates rather than resolving the incident.

We've found that providing status updates every 20-30 minutes during a major incident is a typical cadence that works. This ensures we're not just providing updates for the sake of providing updates, but that they're more likely to have some actual useful information in them. That's not to say you can't provide updates more frequently if there really is new information to share, but it shouldn't be a requirement. We want to spend as much time fixing the incident as we can, but we also want to make sure we keep stakeholders in the loop. It's a delicate balance that's easy to get wrong.

## Assuming silence means no progress.

This is an incident, people should be working hard to solve it. When new comers join an incident call, they need to be aware that a chatterless session is acceptable and reasonable. Silence usually means everyone is working on fixing the problem rather than talking and providing updates. We're not playing a game of "Keep talking and nobody gets fired". The Incident Commander is the one who should be doing most of the talking on a call. They will typically fill silence with a status update if appropriate, but others within the organization need to be trained to know that silence on a call isn't a bad thing, and doesn't mean that progress has stalled. Making sure staff are aware of this ahead of time will prevent awkward conversations during an incident call, which would be ultimately distracting from resolving the incident.

## Litigating severities during the incident call.

The start of a lot of incident calls in PagerDuty's past consisted of a discussion around whether we were really in a SEV-2 situation, or whether it was a smaller issue that could be handled without an incident call. This discussion would usually take up quite a bit of time, as everyone wanted to weigh in. The problem was that while you're having this discussion, the incident is still going on behind the scenes, and by the time you've finished it has become a SEV-1 and you've just wasted 10 minutes discussing severities.

We now have a rule: **We do not discuss incident severity during an incident call**, we always assume it's the higher severity and treat it as such. So if we're not sure if it's a SEV-2 or SEV-3, we treat it like a SEV-2 and move on. We've already spun up the gears of incident response and paged responders, so even if it turns out to be a SEV-3, we may as well continue with the process and treat it as practice if nothing else.

## Hesitating to escalate to other responders.

If it's 3am and you're responding to an incident, we have had cases where a Subject Matter Expert (SME) would be stuck attempting to debug an issue, and they would be reluctant to involve another member of their team due to the time of day. This would end up causing our incident to last longer than it needed to.

**"Never hesitate to escalate"** is now one of our mantras. If you're stuck on a problem and it's 3am, don't hesitate to page someone more knowledgable to help resolve the situation. Don't go too far with this and page everyone, otherwise you fall into the earlier anti-pattern. But you should never feel like you can't page someone if you need help.

## Discussing process and policy decisions during the incident call.

There are occasions where responders don't agree with the incident response policies and processes we might use. Sometimes this will cause a discussion during the incident call, which ends up derailing the process for everyone and causing the underlying incident to last longer, hindering the response. It is absolutely OK to have disagreements with the process and to want to make changes (in fact, this is something we encourage, as it allows us to iteratively improve our process), however during an incident is not the time to have that discussion.

**Policy and processes should not be discussed during an incident**, just like with severities. The current process should be followed during an incident, and any concerns should be raised afterwards, either during a post-mortem or directly to the team managing the incident response process.

## Neglecting the post-mortem and followup activities.

It's tempting once an incident is resolved to not bother with the post-mortem. Either you feel like the cause is well known, or you don't feel that it's worth it. Don't fall into this trap! A post-mortem is always worthwhile. People were mobilized to respond to an incident, which had a cost associated with it. We want to be sure that we understand why that happened, so we can avoid that cost in future.

Don't make the mistake of neglecting a post-mortem after an incident. Without a post-mortem you fail to recognize what you're doing right, where you could improve, and most importantly, how to avoid making the same exact mistakes next time around. A well-designed, blameless post-mortem allows teams to continuously learn, and serves as a way to iteratively improve your infrastructure and incident response process.

If you mobilize responders and determine it's not a "real" incident, you should still conduct a post-mortem. Because the next time you're going to mobilize responders again and waste time. Find out why incident response was triggered when it may not have been needed, and fix that problem.

## Being too focussed on the problem in front of you.

As a responder to an incident, you would typically be focussed on the specific task in front of you. The Incident Commander generally being the person who has the bigger picture of what is going on. There can be a tendency for SME's to become too focussed on the problem they see in front of them, rather than taking the bigger picture into account. This usually presents itself on an incident call with an SME constantly bringing up the same issue without listening to instructions from the incident commander, and having tunnel vision for the specific issue on their system.

Instructions from the Incident Commander should always be followed, as they will typically have more overall context on what is going on. Try not to fall into the trap of being hyper-focused on the problem in front of you, so much so that you derail the process. We want to treat the cause, not a symptom of the incident.

## Being averse to policy and process changes.

Once a stable process is in place, and incidents are getting resolved, there can be lots of hesitation and resistance to changing that process. "If it ain't broke don't fix it", etc. As your company grows, your response will need to change. Holding on to your old processes and practices for too long can hinder your incident response going forward. Don't be reckless, of course, but try to introduce sensible changes and **don't be afraid to make changes which might slow things down in the short-term, but will make things faster in the long-run**. These are the hardest changes to make, but usually the most worthwhile.

## Trying to take on multiple roles.

In past PagerDuty incidents, we've had instances where the Incident Commander has started to assume the Subject Matter Expert role and attempted to solve the problem themselves. This usually happens when the IC is an engineer in their day-to-day role. They are in an incident where the cause appears to be a system they know very well and have the requisite knowledge to fix. Wanting to solve the incident quickly, the IC will start to try and solve the problem. Sometimes you might get lucky and it will resolve the incident, but most of the time the immediately visible issue isn't necessarily the underlying cause of the incident. By the time that becomes apparent, you have an Incident Commander who is not paying attention to the other systems and is just focussed on the one problem in front of them. This effectively means there's no incident commander, as they would be busy trying to fix the problem. Inevitably, the problem turns out to be much bigger than anticipated and the response has become completely derailed.

**You cannot take on another role at the same time as being an Incident Commander**. It can be a difficult to be an IC when you want to jump in as an SME, but you must resist the temptation to abandon the role of IC. If you really are the only person able to solve the problem, you should handover to another Incident Commander and then assume the role of SME. This ensures that the response process remains on track with a dedicated Incident Commander.

Remember that the job of an IC also includes preparing backup plans in case the current action doesn't resolve the incident. If you're acting as an SME fixing on a particular issue, you're not considering the backup plan.

## Trying to be a hero.

It can be tempting to try and solve every issue yourself if you're acting as a Subject Matter Expert. Every request that comes up, you want to jump on it and say you'll take care of it. You'll be the indispensable one who solves all the problems. As noble as the intent is, it rarely leads to an efficient outcome. You want to avoid as much multi-tasking as possible during an incident, and focus on one problem at a time. **Don't try to solve everything yourself**. If multiple requests are coming up for your area of expertise, delegate them to other experts, even paging backup responders if required.

Likewise, if another SME has been assigned a task, don't do the task on their behalf without consulting with them first. While you are trying to help, it will end up hindering the response as you'll have two people working on the same issue, and they may be interfering with each other in unexpected ways.

## Not disseminating policy changes to responders.

We've fallen into the trap in the past of making policy and process changes by simply updating our internal documentation (i.e. this), assuming everyone would read the documentation before an incident. Which of course, never happens.

**Any policy changes need to be appropriately disseminated to your responders ahead of time** so that there are no surprises during an incident. This can be in the form of an email, or an update into a chat room, but big policy changes should never be a surprise to responders.

## Requiring Incident Commanders to have deep technical knowledge.

This is a trap we fell into in our early days of incident response. We had several strong technical requirements for any new Incident Commanders, aiming to only have IC's with deep technical expertise, the intention being that they could diagnose issues very quickly. When it became apparent that we would need a large selection of IC's in order to maintain an effective on-call rotation, we soon realised that we had artificially restricted our pool of potential IC candidates.

**Incident Commanders can come from all across your organization, and don't need to be technical experts**. Since Incident Commanders only coordinate the response, they don't need deep technical knowledge of the system in order to perform their role. The Subject Matter Experts are the ones who need the deep technical knowledge. The Incident Commanders only require a high-level knowledge of how the system works. Where data flows in, how systems use it, and where data flows out. The technical details can be left to the SMEs, with the IC asking relevant questions.

By dropping our strong technical requirements for Incident Commanders, we've been able to dramatically increase our pool of IC's, maintain a high level of quality and efficiency in our response, and help spread empathy for on-call workload to a larger portion of the company.
