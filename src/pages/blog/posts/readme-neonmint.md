---
layout: /src/layouts/MarkdownPostLayout.astro
title: Rpi-image-gen for custom image generation
author: Luka Kidrič
description: "RPI-image-gen is an offical RaspberryPi projecto to build custom Pi images."
image:
  url: "/images/projects/neonmint.webp"
  alt: "Description of how I used rpi-image-gen to create a custom ubuntu image"
pubDate: 2025-08-04
tags:
  [
    "documentation", "tutorial"
  ]
languages: ["python", "linux"]
---

## 🎯 Overview

rpi-image-gen is Raspberry Pi’s new, modular image build system that lets you define your image in text files instead of click‑through installers or brittle shell scripts. It uses configs, device descriptions, profiles, and YAML “layers” to describe everything from partition layouts to package lists and custom hooks.
What this gives you in practice:
	•	Full control over packages, repos, and filesystem content.
	•	Repeatable builds that can run on a CI server or build host.
	•	Clean separation between base OS, device‑specific tweaks, and application stacks.

## 📁 Project Structure

here are the most important files in the project structure

```bash
└── 📁pi-image-ubuntu24-ros2
    └── 📁config
        ├── ubuntu24-ros2-pi5.cfg
    └── 📁profile
        ├── 📁ubuntu24-ros2-pi5 # Reusable UI components
    └── 📁meta
        ├── 📁ubuntu # Reusable UI components
        │   ├── 📁kernel.yaml   # Blog components
        │   ├── 📁ubuntu.yaml  # Layout components
        │   ├── 📁ros2.yaml # Portfolio components
 
```

## ✨ Key Features


## ⚙️ Configuration



## 🎨 Customization
👉 [View repo](https://github.com/Luks24/rpi-image-ubuntu24-ros2) 

