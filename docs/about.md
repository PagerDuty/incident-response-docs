---
cover: assets/img/covers/incident_response_docs.png
hero: assets/img/headers/iStock-1097331490-3992x2242-e4f3f2d.png
hero_alt_text: PagerDuty
---
このサイトはPagerDutyのインシデント対応プロセスの一部を文書化したものです。PagerDutyの社内文書の一部を切り取ったもので、PagerDutyでは重大なインシデントの発生時や、新入社員のオンコール対応準備に使用しています。インシデントの準備だけでなく、インシデント発生中や発生後に何をすべきかについての情報も提供しています。

重大インシデントに対処するための社内プロセスについて語る企業はほとんどないようです。このような状況を変えたいと思い、私たちのドキュメントをコミュニティに公開することにしました。さらに、他の人が改善を提案する機会を提供することで、結果的にすべての人の助けになるのです。

## What is this?

A collection of pages detailing how to efficiently deal with any major incidents that might arise, along with information on how to go on-call effectively. It provides lessons learned the hard way, along with training material for getting you up to speed quickly.

## Who is this for?

It is intended for on-call practitioners and those involved in an operational incident response process, or those wishing to enact a formal incident response process.

## Why do I need it?

Incident response is something you hope to never need, but when you do, you want it to go smoothly and seamlessly. Normally the knowledge of how to handle incidents within your company will be built up over time, getting better with each incident. While tools such as [PagerDuty's Modern Incidents Response](https://www.pagerduty.com/platform/modern-incident-response/) can help you recover quickly, the process you follow is just as important. This documentation will allow you to learn from the start something which has taken us years to build up. Giving you a head start on how to deal with major incidents in a way which leads to the fastest possible recovery time.

## What is covered?

Anything from preparing to [go on-call](oncall/being_oncall.md), definitions of [severities](before/severity_levels.md), incident [call etiquette](before/call_etiquette.md), all the way to how to run a [postmortem](after/post_mortem_process.md), and providing our [postmortem template](after/post_mortem_template.md). We even include our [security incident response process](during/security_incident_response.md).

## What is missing?

This isn't an exact clone of our internal documentation, but instead has some information removed. Things such as our phone bridge numbers, names of internal tools and systems which are not (yet) open sourced, images of our dashboards, etc. Basically anything that is specific to PagerDuty or is too sensitive to share.

## License

This documentation is provided under the Apache License 2.0. In plain English that means you can use and modify this documentation and use it both commercially and for private use. However, you must include any original copyright notices, and the original LICENSE file.

Whether you are a PagerDuty customer or not, we want you to have the ability to use this documentation internally at your own company. You can view the source code for all of this documentation on our GitHub account, feel free to fork the repository and use it as a base for your own internal documentation.
