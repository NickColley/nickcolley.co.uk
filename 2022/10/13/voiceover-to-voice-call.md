---
layout: layouts/post.njk
title: How to send VoiceOver audio to a voice call
summary: How to send the audio from VoiceOver to a voice call like Google Meet, Zoom or Microsoft Teams.
date: 2022-10-13
tags: post
---

{{ summary }}

## Before you start, you'll need:
- Headphones &mdash; to stop speaker audio coming through your microphone.
- macOS

## Overview

{% graph 400, 320, "Flow for VoiceOver to a VoiceCall", "DIRECTED-GRAPH" %}
<script>
const VOICEOVER = { icon: "🔊", label: "VoiceOver", position: [0.2, 0] };
const VOICE = { icon: "🗣️", label: "Voice", position: [0.8, 0] };
const MICROPHONE = {
  icon: "🎤",
  label: "Microphone",
  position: [1, 0.5],
  parents: [VOICE],
};
const MULTIOUTPUTDEVICE = {
  icon: "🎛️",
  label: "Multi-Output Device",
  position: [0, 0.28],
  parents: [VOICEOVER],
};
const HEADPHONES = {
  icon: "🎧",
  label: "Headphones",
  position: [0, 0.5],
  parents: [MULTIOUTPUTDEVICE],
};
const BLACKHOLE = {
  icon: "🌌",
  label: "Blackhole",
  position: [0.5, 0.5],
  parents: [MULTIOUTPUTDEVICE],
};
const AGGREGATEDEVICE = {
  icon: "🎛️",
  label: "Aggregate Device",
  position: [0.666, 0.72],
  parents: [BLACKHOLE, MICROPHONE],
};
const EARS = {
  icon: "👂",
  label: "Ears",
  position: [0.15, 1],
  parents: [HEADPHONES],
};
const VOICECALL = {
  icon: "🎦",
  label: "Voice Call",
  position: [0.666, 1],
  parents: [AGGREGATEDEVICE],
};
window.NODES = [
  VOICEOVER,
  MULTIOUTPUTDEVICE,
  HEADPHONES,
  BLACKHOLE,
  EARS,
  VOICE,
  MICROPHONE,
  AGGREGATEDEVICE,
  VOICECALL,
];
</script>
{% endgraph %}

## Steps

1. [Install Blackhole](#1-install-blackhole)
1. [Create a Multi-Output Device for your Headphones and Blackhole to receive audio](#2-create-a-multi-output-device-for-your-headphones-and-blackhole-to-receive-audio)
1. [Create an Aggregate Device to mix together your Microphone and Blackhole](#3-create-an-aggregate-device-to-mix-together-your-microphone-and-blackhole)
1. [Configure VoiceOver to use Multi-Output Device](#4-configure-voice-over-to-use-multi-output-device)
1. [Configure Voice Call to use Aggregate Device](#5-configure-voice-call-to-use-aggregate-device)

## 1. Install Blackhole

{% graph 150, 170, "Flow for Blackhole", "DIRECTED-GRAPH-BLACK-HOLE" %}
<script>
const AUDIOIN = {
  icon: "🔊",
  label: "Audio-in",
  position: [0.5, 0],
};
const BLACKHOLE = {
  icon: "🌌",
  label: "Blackhole",
  position: [0.5, 0.5],
  parents: [AUDIOIN],
};
const AUDIOOUT = {
  icon: "👂",
  label: "Audio-out",
  position: [0.5, 1],
  parents: [BLACKHOLE],
};
window.NODES = [
  AUDIOIN,
  BLACKHOLE,
  AUDIOOUT
];
</script>
{% endgraph %}

[Blackhole](https://github.com/ExistentialAudio/BlackHole) is a virtual audio device.
Audio sent to Blackhole can then be used as an input in other applications.
It is similar to [LoopBack](https://rogueamoeba.com/loopback) but is free and open-source.

If you have [brew](https://brew.sh/) installed:
```bash
brew install blackhole-2ch
```

or follow the [Blackhole installation guide](https://github.com/ExistentialAudio/BlackHole/wiki/Installation).

## 2. Create a Multi-Output Device for your Headphones and Blackhole to receive audio

{% graph 270, 130, "Flow for Mutli-Output Device", "DIRECTED-GRAPH-MULTI-OUTPUT-DEVICE" %}
<script>
const MULTIOUTPUTDEVICE = {
  icon: "🎛️",
  label: "Multi-Output Device",
  position: [0.5, 0],
};
const BLACKHOLE = {
  icon: "🌌",
  label: "Blackhole",
  position: [0, 1],
  parents: [MULTIOUTPUTDEVICE],
};
const HEADPHONES = {
  icon: "🎧",
  label: "Headphones",
  position: [1, 1],
  parents: [MULTIOUTPUTDEVICE],
};
window.NODES = [
  MULTIOUTPUTDEVICE,
  BLACKHOLE,
  HEADPHONES
];
</script>
{% endgraph %}

Send audio from VoiceOver to both Blackhole and your Headphones &mdash; so we can hear it ourselves.

Make sure your headphones are plugged in.

1. Open the Midi Audio Device window by opening Spotlight with `command ⌘` + `space` and typing `Midi Audio Device`.
1. Create a new Multi-Output Device device by pressing the plus (`+`) icon.
1. Select Blackhole and Headphones, making sure Blackhole is first.

> Do not set 'Use This Device For Sound Output', we will setup VoiceOver to use this device.

Find a full [walkthrough of creating a Multi-Output Device on the Blackhole wiki](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device).

{% image "./2022/10/13/multi-output-device.png", "Midi Audio Device > Multi-Output Device with Blackhole and Headphones selected" %}

## 3. Create an Aggregate Device to mix together your Microphone and Blackhole

{% graph 270, 130, "Flow for Aggregate Device Device", "DIRECTED-GRAPH-AGGREGATE-DEVICE" %}
<script>
const MICROPHONE = {
  icon: "🎤",
  label: "Microphone",
  position: [0, 0]
};
const BLACKHOLE = {
  icon: "🌌",
  label: "Blackhole",
  position: [1, 0]
};
const AGGREGATEDEVICE = {
  icon: "🎛️",
  label: "Aggregate Device",
  position: [0.5, 1],
  parents: [BLACKHOLE, MICROPHONE],
};
window.NODES = [
  MICROPHONE,
  BLACKHOLE,
  AGGREGATEDEVICE,
];
</script>
{% endgraph %}

1. Create a new Aggregate Device device.
1. Select Blackhole and Microphone, make sure Microphone is first.
1. Right-click and set the Aggregate Device as your default input.

Find a full [walkthrough of creating a Aggregate Device on the Blackhole wiki](https://github.com/ExistentialAudio/BlackHole/wiki/Aggregate-Device).

{% image "./2022/10/13/aggregate-device.png", "Midi Audio Device > Aggregate Device with Blackhole and Microphone selected" %}

## 4. Configure VoiceOver to use Multi-Output Device

{% graph 210, 115, "Flow for VoiceOver", "DIRECTED-GRAPH-VOICE-OVER" %}
<script>
const VOICEOVER = { icon: "🔊", label: "VoiceOver", position: [0.5, 0] };
const MULTIOUTPUTDEVICE = {
  icon: "🎛️",
  label: "Multi-Output Device",
  position: [0.5, 1],
  parents: [VOICEOVER],
};
window.NODES = [
  VOICEOVER,
  MULTIOUTPUTDEVICE
];
</script>
{% endgraph %}

1. Open the VoiceOver Utility window by opening Spotlight with `command ⌘` + `space` and typing `VoiceOver Utility`.
1. Go to the Sound tab and set the Output Device option to Multi-Output Device.

{% image "./2022/10/13/voiceover-utility-sound.png", "VoiceOver Utility > Sound > Output Device set to Multi-Output Device" %}

## 5. Configure Voice Call to use Aggregate Device

{% graph 200, 115, "Flow for VoiceCall", "DIRECTED-GRAPH-VOICE-CALL" %}
<script>
const AGGREGATEDEVICE = {
  icon: "🎛️",
  label: "Aggregate Device",
  position: [0.5, 0]
};
const VOICECALL = {
  icon: "🎦",
  label: "Voice Call",
  position: [0.5, 1],
  parents: [AGGREGATEDEVICE],
};
window.NODES = [
  AGGREGATEDEVICE,
  VOICECALL,
];
</script>
{% endgraph %}

1. Open your Voice Call settings and set your input to Aggregate Device.
1. Ensure any Noise Cancellation is turned off.

{% image "./2022/10/13/voice-call-settings.png", "Google Meet Settings > Audio > Microphone dropdown set to Aggregate Device, Noise Cancellation turned off" %}
