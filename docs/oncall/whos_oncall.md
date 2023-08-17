---
cover: assets/img/covers/whos_on-call.png
description: Organizational structures vary, but these are general guidelines about the way different functions in a business relate to incident response.
---
Organizational structures vary, but these are general guidelines about the way different functions in a business relate to incident response.

Generally speaking, every department should have a primary point of contact, on-call rotation, and clear escalation path. Organizations should always strive to minimize dependencies and empower response teams as much as possible. But, in novel situations, you do not know who you will need to help out. A clear system for recruiting responders from all parts of the business ensures that when the unexpected happens, responders don’t waste time on manual processes or ambiguous points of contact.

## Engineering

Engineers are typically the primary responders and [subject matter experts](../before/different_roles.md) during incident response.

Which engineering teams are involved in which responses varies with a company’s operational model. In some organizations, a designated “Operations” or “Site Reliability Engineering” team may have initial responsibility for triage and assessment of new issues. At PagerDuty, the on-call engineer for an affected service has initial triage and assessment responsibility.

## Customer Support / Customer Success

Support is the voice of the customer during incident response. A member of the Customer Support team is the default [Customer Liaison](../training/customer_liaison.md) within the response team, updating customers and stakeholders about incident status through Twitter, an internal Slack channel, and other channels as needed. They may also serve as an internal liaison to keep stakeholders within the company up to date.

## Marketing

Marketing or Public Relations is the primary response team for any public relations Incident.

Additionally, Marketing or Public Relations should be engaged in any incident of scope or severity such that the company’s brand or image is at risk, or where public updates need to be sent through customer communication channels such as mass email or the company blog.

## Product Management and Design

Product Managers and Designers are often on the hook for helping response teams make decisions when product functionality is impacted across multiple services or products. For example, if the response team has to decide which service to bring back up first, a Product Manager can help decide which one is more customer impacting.

Product will also be involved in the [postmortem process](../after/post_mortem_process.md), for both scheduling follow-up action against other work, as well as advising on any required product changes due to the issue.

## Executive Team

Clear processes for updating the executive team during a major incident response helps ensure organizational leadership has the context and information they need and prevents [executive swoops](../training/glossary.md#executive-swoop). Additionally, while the Incident Commander has final authority during response, occasionally a major incident may require action at the highest levels of a company. For example, a senior executive may want to reach out to an impacted customer or partner to manage their relationship and help assure them the issue is getting the attention it needs.

## Sales

Sales are generally stakeholders during incident response. Salespeople should be notified when there is any impact to the product that may affect demos or customer conversations, and account owners should understand any potential impact to their accounts.

## Human Resources (HR)

HR is generally involved in any response to incidents affecting the safety or health of employees. Additionally, during a security incident, the security team may need to coordinate with HR both for management of an internal attacker as well as protection of any affected employees.

## Finance

Finance is most often a stakeholder during incident response, and should be kept up to date of any impacts to the platform that may affect billing, accounting, or end-of-month/quarter activities.

However, finance should also have a clear on-call rotation and escalation path as there may be components of incident response that require third-party account management or other related actions.

!!! tip "Consider Your Entire Organization"

    There may be other parts of your organization that need to be part of incident response, either as responders or stakeholders. It is important to identify the different areas of your business and think through situations in which they may need to be involved, as well as ensure that anyone on-call has proper incident response training and understands their responsibilities.
