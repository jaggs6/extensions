import React from 'react';

import {
  Button,
  Caption,
  Card,
  Icon,
  Image,
  Subtitle,
  TouchableOpacity,
  View,
} from '@shoutem/ui';

import { connectStyle } from '@shoutem/theme';

import { ext } from '../const';

import ListItem from './ListItem';

var cf from 'currency-formatter';

const GridItem = ({ item, onAddToCart, onPress, shop }) => {
  const { images, minimum_price, minimum_compare_at_price, title } = item;
  const { currency = '' } = shop;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card styleName="flexible">
        <Image
          styleName="medium-wide"
          source={{ uri: (images[0] || {}).src }}
          defaultSource={require('../assets/images/image-fallback.png')}
        />
        <View styleName="content">
          <Subtitle numberOfLines={3}>{title}</Subtitle>
          <View styleName="horizontal v-center space-between">
            <Subtitle
              styleName="md-gutter-right"
            >
              {`${cf.format(minimum_price, { code: currency })}`}
            </Subtitle>
            <Caption styleName="line-through">
              {minimum_compare_at_price ? `${cf.format(minimum_compare_at_price, { code: currency })}` : ''}
            </Caption>
            <Button
              onPress={onAddToCart}
              styleName="tight clear"
            >
              <Icon name="add-to-cart" />
            </Button>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

GridItem.propTypes = {
  ...ListItem.propTypes,
};

export default connectStyle(ext('GridItem'))(GridItem);
