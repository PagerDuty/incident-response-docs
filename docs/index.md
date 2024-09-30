---
cover: assets/img/covers/incident_response_docs.png
hero: assets/img/headers/iStock-1097331490-3992x2242-e4f3f2d.png
hero_alt_text: Incident Response at PagerDuty
---
この文書は、PagerDutyのインシデント対応プロセスの一部をカバーしています。これは、PagerDuty社内で重大なインシデントが発生した場合や、新入社員がオンコールの責任を担う準備をする際に使用される社内文書の簡略版です。インシデントへの備えだけでなく、インシデント発生中および発生後の対応についても情報を提供しています。オンコール要員や運用中のインシデント対応プロセスに関わる人々(または正式なインシデント対応プロセスを導入したいと考えている人々)が使用することを想定しています。この文書が何であり、なぜ存在するのかについての詳細は、[about page](about.md)を参照してください。

!!! ヒント: 何から始めたらわからない方へ
    インシデント対応が初めてで、まだ組織内に正式なプロセスがない場合は、まず [Getting Started](getting_started.md) ページを参照し、はじめにすべきことの簡単なリストを確認することをお勧めします。 さらに、[Training Course](training/courses/incident_response.md) ページで、当社のプロセス概要について詳しい情報を得ることもできます。

## オンコールについて

オンコールの経験がない場合、オンコールとはどのようなものか疑問に思うかもしれません。これらのページでは、オンコールに求められること、およびオンコール対応を支援するリソースについて説明しています。

* [Being On-Call](oncall/being_oncall.md) - _オンコール時のガイド。オンコール担当者の責任と、責任でないことについて。_
* [Alerting Principles](oncall/alerting_principles.md) - _いつ・どのようなときにエンジニアを呼び出すかについて、判断するための原則_

## インシデント発生前

インシデント発生前に知っておくべき情報。実際のインシデント発生時には、これらを読んでいる余裕はないでしょう。

* [What is an Incident?](before/what_is_an_incident.md) - _インシデント対応について語る前に、インシデントとは実際に何なのかを定義する必要があります。_
* [Severity Levels](before/severity_levels.md) - _自社の重大度レベル分類に関する情報。SEV-3とSEV-1の違いは何か? それらはどのような対応が必要になるのか?_
* [Different Roles for Incidents](before/different_roles.md) - _インシデント発生時の役割(インシデント・コマンダー(IC)、記録係など)に関する情報_
* [Incident Call Etiquette](before/call_etiquette.md) - _インシデント通知のエチケットガイドライン(通知を受ける前にご確認ください)。_
* [Complex Incidents](before/complex_incidents.md) - _大規模で複雑なインシデントの処理に関するガイド_

## インシデント発生中

重大インシデント発生中におけるプロセスおよび情報。

* [During an Incident](during/during_an_incident.md) - _インシデント発生時に何をすべきか、建設的に貢献する方法に関する情報_
* [Security Incident Response](during/security_incident_response.md) - _セキュリティインシデントは、通常の運用インシデントとは異なる方法で対応されます。_

## インシデント解決後

過ちを繰り返さないための取り組み、常に改善を続けるためのフォローアップのプロセス。

* [After an Incident](after/after_an_incident.md) - _インシデント解決後に取るべき対応に関する情報_
* [Postmortem Process](after/post_mortem_process.md) - _ポストモーテムのプロセス、その内容、およびポストモーテムレポートの作成方法に関する情報_
* [Postmortem Template](after/post_mortem_template.md) - _重大インシデントのポストモーテムレポートを作成する際に使用するテンプレート_
* [Effective Postmortems](after/effective_post_mortems.md) - _効果的なポストモーテムレポートを記述するためのガイド_

## 危機対応

インシデント対応は、技術的なインシデントへの対処だけではありません。危機はいつでも起こり得ます。あなたはそれに対して備えができていますか?最悪の事態への対処の仕方によって、現在の顧客や潜在顧客の目には、貴社のブランドやその価値がどう映るかが決まります。

* [Introduction](crisis/crisis_intro.md) - _危機対応の概要と、この文書の対象者について_
* [Terminology](crisis/terms.md) - _このガイドで使用される主な用語と概念の一覧_
* [Crisis Leadership](crisis/leadership.md) - _基本原則と貴社の価値観を対応に組み込むことについて_
* [Crisis Response Operations](crisis/operations.md) - _危機対応計画の実行_
* [Pre-crisis Phase](crisis/prework.md) - _準備のための活動を最大限に活用し、チームを常に準備万端にしておくことについて_
* [PagerDuty for CRMOps](crisis/pagerduty.md) - _当社がPagerDutyを危機対応管理オペレーションに活用している方法_

## トレーニング

インシデント対応について学びたいですか? こちらをご覧ください。

* [Training Overview](training/overview.md) - _当社のトレーニングガイドとサードパーティによる追加トレーニング教材の概要_
* [Glossary of Incident Response Terms](training/glossary.md) - _インシデント対応に関する用語とその定義の一覧_

### トレーニングガイド

* [Incident Commander Training](training/incident_commander.md) - _インシデント対応チームの指揮官(インシデント・コマンダー)になるためのガイドです_
* [Deputy Training](training/deputy.md) - _副指揮官(Deputy)となり、インシデント・コマンダーを支援する方法_
* [Scribe Training](training/scribe.md) - _書記係(Scribe)になるためのガイド_
* [Subject Matter Expert Training](training/subject_matter_expert.md) - _重大インシデントに関わるすべての参加者の責任と行動に関するガイド_
* [Customer Liaison Training](training/customer_liaison.md) - _インシデント発生時に外部向け連絡係(Customer Liaison)として行動する方法に関するガイド_
* [Internal Liaison Training](training/internal_liaison.md) - _インシデント発生時に内部向け連絡係(Internal Liaison)として行動する方法に関するガイド_

### トレーニングコース

* [Incident Response Training Course](training/courses/incident_response.md) - _インシデント対応とインシデント・コマンダーの役割に関する入門コース_

## その他の情報

インシデント対応に関連する外部の有用な資料や情報

* [Reading](resources/reading.md) - _インシデント対応に関連する推奨読み物_
* [ChatOps](resources/chatops.md) - _この文書で参照しているチャットボットコマンドの説明_
* [Anti-Patterns](resources/anti_patterns.md) - _PagerDutyが自社で試した結果、却下したもののリスト - 私たちの過ちから学ぼう_
