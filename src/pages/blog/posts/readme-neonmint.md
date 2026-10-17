---
layout: /src/layouts/MarkdownPostLayout.astro
title: Rpi-image-gen for custom image generation
author: Luka Kidrič
description: "rpi-image-gen is the official Raspberry Pi project for building custom Pi images. Here is how I used it to build a custom Ubuntu image."
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
        │   ├── 📁kernel.yaml   # kernel installation script
        │   ├── 📁firmware.yaml # firmware installation script
        │   ├── 📁ubuntu.yaml  # ubuntu installation script
        │   ├── 📁ros2.yaml # ROS2 installation script
 
```

## ✨ How it works 

To execute the build, I do this with the command ***podman ./build.sh -c config/ubuntu24-ros2-pi5.cfg*** 
This will first execute config/ubuntu24-ros2-pi5.cfg This file basically just defines the profile. 

```bash
[image]
layout=mbr/simple_dual
name=ros2

[device]
class=pi5
profile=ubuntu24-ros2-pi5
```

This file then calls the profile definition which is just a list of scripts that need to be executed.

```bash
ubuntu/ubuntu
ubuntu/ros2
rpi/misc-utils
rpi/base/essential
ubuntu/firmware
ubuntu/kernel
rpi/user-credentials
rpi/misc-skel
ubuntu/dns
```

Some of them like the ones that are in the rpi directory are generic. But all the ones in the ubuntu are custom ones that I have created for our custom ubuntu 24 ros 2 image.

So those scripts are the ones you want to probably modify or add new ones. I tried to break them up logically by what they do.

So once all the scripts run the image is build.

## 🎨 Customization

If you want to customize anything here, you would change the scripts or add new ones. In this short tutorial, I didn't go into specifics, but just wanted to present to you the tool.


If you want to know more, just contact me, and I can give you a more detailed description.


👉 [View repo](https://github.com/Luks24/rpi-image-ubuntu24-ros2) 

