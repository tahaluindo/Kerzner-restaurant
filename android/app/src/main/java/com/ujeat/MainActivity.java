package com.ujeat;

import com.facebook.react.ReactActivity;

//ADDED:

import org.amen.reactnative.locationswitch.LocationSwitch;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "UJeat";
  }

  //ADDED:

  @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    LocationSwitch.getInstance().onActivityResult(requestCode, resultCode);
  }
}
