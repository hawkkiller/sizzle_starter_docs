---
title: Architecture
description: A description of the architecture of the project.
---

This document provides an overview of the recommended architecture of a Flutter app.

## Feature Based

tSizzle splits the application into logical features. Each feature contains code that represents a slice of the domain. For example, a shopping cart, auth, or search.  To learn more about feature boundaries, see [Feature Boundaries].

## Layers

Layers:

- Presentation (widget, state controller)
- Application (service): optional
- Domain (entities, value objects, repository interfaces)
- Data (repository impl)

