import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
 View,
 Button,
 StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  nickname: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  stateMsg: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  direction: {
    flexDirection: 'column',
  },
  setting: {
    color: '#841584',
  },
});

class ProfileSetting extends Component {
 render() {
   return (
    <View style={[styles.direction]}>
      <View>
        <Button
          style={[styles.nickname]}
          onPress={Actions.makeNickname}
          title="change nickname"
        />
      </View>
      <View>
        <Button
          style={[styles.stateMsg]}
          onPress={Actions.changeStateMsg}
          title="change State Message"
        />
      </View>
    </View>
   );
 }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

ProfileSetting = connect(mapStateToProps, mapDispatchToProps)(ProfileSetting);

export default ProfileSetting;
