---
title: Introduction
description: ''
position: 1
category: Intro
---


<alert type="info">
Declarative style: 
You can use map elements like layers, markers, popups as Vue components and control them via synchronized props
</alert>

<alert type="success">
Vuefied:
Map elements declared as components respect Vue lifecycle, emit map events like Vue events and can be used in OOP-style
</alert>

<alert type="info">
Promisified async actions:
You can do async map operations and get results in Promise without messing with map events and figuring out what action cause it
</alert>

```vue
<template>
  <MglMap
    container="map-test"
    :center.sync="center"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
  >
    <MglMarker
      :coordinates.sync="markerCoordinates"
      color='green'
    />
    <MglGeojsonLayer
      type="fill"
      :sourceId="sourceId"
      :layerId="layerId"
      :source="geojson"
      @click="handleClick"
    />
  </MglMap>
</template>

<script>
import {
  MglMap,
  MglMarker,
  MglGeojsonLayer
} from 'v-mapbox'

export default {
  name: 'App',
  data() {
    return {
      accessToken: 'some_token',
      mapStyle: 'mapbox://map_style',
      geojson: { /* … some geojson */},
      layerId: 'firstLayer',
      sourceId: 'firstSource',
      markerCoordinates: [50, 50]
    };
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  }
}
</script>
```

### Dependencies
[Vue.js 3+](https://github.com/vuejs/vue)  
[mapbox-gl-js 1.12+](https://github.com/mapbox/mapbox-gl-js)  
[map-promisified](https://github.com/soal/map-promisified)


### Size

<alert type="info">
~ 15 kB minified and gzipped
</alert>


