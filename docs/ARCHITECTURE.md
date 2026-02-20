# Architecture Governance RFC

## Status
Binding

## Scope
This RFC is the mandatory architectural contract for all contributors and AI coding agents in this repository.

## 1. Architectural Philosophy

The 40:15 Tennis Social Network MUST follow a Modular Monolith approach while evolving as a MULTISERVICE SYSTEM.

The platform MUST be microservice-ready from day one:
- Every product capability MUST be implemented as an isolated Feature Module.
- Every Feature Module MUST behave as an independent runtime unit.
- Every Feature Module MUST encapsulate business logic for its capability.
- Every Feature Module MUST expose integration interfaces.
- Every Feature Module MUST avoid internal coupling to other feature internals.

Feature-driven development is mandatory:
- Capabilities MUST be organized by feature boundaries.
- Features MUST own their workflows and orchestration contracts.

Service ownership of business logic is mandatory:
- Domain rules MUST be defined by owning services.
- Shared business logic across features is prohibited.
- Business logic duplication across feature boundaries is prohibited.

The codebase MUST remain structured so any Feature or Service can be deployed as an independent service in the future without refactoring business logic.

## 2. Layered Project Structure

The following layers are mandatory and normative:

- `/entities`
  - Defines canonical domain entities and contracts.
  - MUST remain free of orchestration and cross-domain business rules.

- `/features`
  - Defines user capabilities and feature-level application flows.
  - MUST encapsulate capability behavior behind public interfaces.

- `/widgets`
  - Defines composite presentation units.
  - MUST consume public interfaces from `/features`, `/services`, and `/shared`.
  - MUST NOT host business decision logic.

- `/services`
  - Defines domain ownership boundaries and business policy execution.
  - MUST expose explicit service interfaces for read and mutation operations.

- `/shared`
  - Defines cross-cutting technical assets (tokens, utility primitives, base abstractions).
  - MUST NOT become a container for domain business logic.

- `/app`
  - Defines routing and runtime composition boundaries.
  - MUST compose modules and route flows without owning domain business rules.

## 3. Mandatory Feature Isolation Rules

AI agents and contributors MUST comply with all of the following:

- All user capabilities MUST be implemented inside `/features`.
- Business logic MUST NOT be placed in pages, route files, or `/widgets`.
- A feature MUST NOT access another feature's internal modules.
- Features MUST communicate only via service interfaces or documented public APIs.
- Cross-feature internal imports MUST NOT occur.
- Shared mutable state between features MUST NOT be introduced.

## 4. Service Ownership Rules

Each business domain MUST belong to exactly one owning Service.

Normative mapping examples:
- Match -> Match Service
- Tournament -> Tournament Service
- Rating -> Rating Service
- Geo -> Geo Service

Only the owning service MAY:
- Mutate domain data
- Define domain rules
- Perform domain calculations

All non-owning modules MUST treat that domain as read-only and MUST access it only through exposed interfaces.

## 5. Integration Protocol for New Features

Every new feature MUST:

- Expose a public API via `index.ts`
- Depend only on `/shared` and `/services` (plus its own internal modules)
- NOT modify entity models directly
- NOT introduce global side effects
- Be UI-independent from the routing layer in `/app`
- Be extractable into a standalone service boundary

## 6. MULTISERVICE REQUIREMENT

The system MUST NOT evolve as a monolith.

Every Feature, Entity, Domain, Integration, and Business Capability MUST be designed as a potential future:
- Independent Service
- Containerized Runtime
- API Boundary

AI agents MUST assume that every Feature may later execute outside the Next.js runtime.

Architectural decisions MUST preserve runtime decoupling, interface contracts, and service-boundary portability.

## 7. Forbidden Practices

The following are prohibited:

- Business logic inside React components
- Direct database access from UI-layer code
- Cross-service mutations
- Feature-to-feature state manipulation
- Global stores used as domain data authorities
- Monolithic placement of domain logic

## 8. Future Microservice Extraction Guarantee

Each Feature or Service MUST be extractable into a standalone runtime unit without rewriting business logic.

Any change that introduces tight coupling, hidden dependencies, or boundary leakage MUST be rejected as non-compliant.

## 9. Design System Compliance

All UI MUST:

- Use shared design tokens
- Avoid hardcoded visual values
- Support the clay brand palette

Design tokens are the authoritative visual contract. UI modules MUST NOT bypass token governance.

## Compliance

This RFC is binding for all AI agents and human contributors.

Any contribution that violates this contract MUST be revised before acceptance.
