// @flow

'use-strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { ImageCrop } from 'react-native-image-cropper'

const { width, height } = Dimensions.get('window')

class CropView extends Component {

  crop = () => {
    this.refs.cropper.crop()
    .then(base64 => console.log(base64))
  }

  render() {
    const { cropRatio } = this.props
    const cropHeight = width * cropRatio
    return(
      <View style={{ flex: 1 }} >
        <ImageCrop
          ref={'cropper'}
          image={this.state.image}
          cropHeight={cropHeight}
          cropWidth={width}
          maxZoom={80}
          minZoom={20}
          panToMove={true}
          pinchToZoom={true}
        />
        <TouchableOpacity
          style={{ padding: 1, alignSelf: 'stretch', height: GRID_SIZE }}
          onPress={this.crop}
        >
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
CropView.propTypes = {
  cropRatio: PropTypes.number,
}
CropView.defaultProps = {
  cropRatio: 1,
}