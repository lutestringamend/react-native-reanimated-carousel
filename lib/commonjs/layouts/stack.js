Object.defineProperty(exports,"__esModule",{value:true});exports.horizontalStackLayout=horizontalStackLayout;exports.useHorizontalStackLayout=useHorizontalStackLayout;exports.verticalStackLayout=verticalStackLayout;var _react=require("react");var _reactNative=require("react-native");var _reactNativeReanimated=require("react-native-reanimated");var screen=_reactNative.Dimensions.get("window");var _worklet_5756272565831_init_data={code:"function anonymous(_value) {\n  const {\n    screen,\n    modeConfig,\n    getCommonVariables,\n    getCommonStyles,\n    interpolate,\n    Extrapolate\n  } = this._closure;\n  const {\n    showLength: showLength,\n    snapDirection = \"left\",\n    moveSize = screen.width,\n    stackInterval = 18,\n    scaleInterval = 0.04,\n    opacityInterval = 0.1,\n    rotateZDeg = 30\n  } = modeConfig;\n  const transform = [];\n  const {\n    validLength: validLength,\n    value: value,\n    inputRange: inputRange\n  } = getCommonVariables({\n    showLength: showLength,\n    value: _value,\n    snapDirection: snapDirection\n  });\n  const {\n    zIndex: zIndex,\n    opacity: opacity\n  } = getCommonStyles({\n    validLength: validLength,\n    value: value,\n    opacityInterval: opacityInterval,\n    snapDirection: snapDirection\n  });\n  const styles = {\n    transform: transform,\n    zIndex: zIndex,\n    opacity: opacity\n  };\n  let translateX;\n  let scale;\n  let rotateZ;\n  if (snapDirection === \"left\") {\n    translateX = interpolate(value, inputRange, [-moveSize, 0, validLength * stackInterval], Extrapolate.CLAMP);\n    scale = interpolate(value, inputRange, [1, 1, 1 - validLength * scaleInterval], Extrapolate.CLAMP);\n    rotateZ = interpolate(value, inputRange, [-rotateZDeg, 0, 0], Extrapolate.CLAMP) + \"deg\";\n  } else if (snapDirection === \"right\") {\n    translateX = interpolate(value, inputRange, [-validLength * stackInterval, 0, moveSize], Extrapolate.CLAMP);\n    scale = interpolate(value, inputRange, [1 - validLength * scaleInterval, 1, 1], Extrapolate.CLAMP);\n    rotateZ = interpolate(value, inputRange, [0, 0, rotateZDeg], Extrapolate.CLAMP) + \"deg\";\n  }\n  transform.push({\n    translateX: translateX\n  }, {\n    scale: scale\n  }, {\n    rotateZ: rotateZ\n  });\n  return styles;\n}",location:"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts",sourceMap:"{\"version\":3,\"names\":[\"anonymous\",\"_value\",\"screen\",\"modeConfig\",\"getCommonVariables\",\"getCommonStyles\",\"interpolate\",\"Extrapolate\",\"_closure\",\"showLength\",\"snapDirection\",\"moveSize\",\"width\",\"stackInterval\",\"scaleInterval\",\"opacityInterval\",\"rotateZDeg\",\"transform\",\"validLength\",\"value\",\"inputRange\",\"zIndex\",\"opacity\",\"styles\",\"translateX\",\"scale\",\"rotateZ\",\"CLAMP\",\"push\"],\"sources\":[\"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts\"],\"mappings\":\"AAsCS,SAACA,SAAcA,CAAKC,MAAA;EAAA;IAAAC,MAAA;IAAAC,UAAA;IAAAC,kBAAA;IAAAC,eAAA;IAAAC,WAAA;IAAAC;EAAA,SAAAC,QAAA;EAGzB,MAAM;IACJC,UAAU,EAAVA,UAAU;IACVC,aAAa,GAAG,MAAM;IACtBC,QAAQ,GAAGT,MAAM,CAACU,KAAK;IACvBC,aAAa,GAAG,EAAE;IAClBC,aAAa,GAAG,IAAI;IACpBC,eAAe,GAAG,GAAG;IACrBC,UAAU,GAAG;EACf,CAAC,GAAGb,UAAU;EAEd,MAAMc,SAAuC,GAAG,EAAE;EAClD,MAAM;IAAEC,WAAW,EAAXA,WAAW;IAAEC,KAAK,EAALA,KAAK;IAAEC,UAAA,EAAAA;EAAW,CAAC,GAAGhB,kBAAkB,CAAC;IAC5DK,UAAU,EAAEA,UAAW;IACvBU,KAAK,EAAElB,MAAM;IACbS,aAAA,EAAAA;EACF,CAAC,CAAC;EACF,MAAM;IAAEW,MAAM,EAANA,MAAM;IAAEC,OAAA,EAAAA;EAAQ,CAAC,GAAGjB,eAAe,CAAC;IAC1Ca,WAAW,EAAXA,WAAW;IACXC,KAAK,EAALA,KAAK;IACLJ,eAAe,EAAfA,eAAe;IACfL,aAAA,EAAAA;EACF,CAAC,CAAC;EAEF,MAAMa,MAAiB,GAAG;IACxBN,SAAS,EAATA,SAAS;IACTI,MAAM,EAANA,MAAM;IACNC,OAAA,EAAAA;EACF,CAAC;EAED,IAAIE,UAAkB;EACtB,IAAIC,KAAa;EACjB,IAAIC,OAAe;EAEnB,IAAIhB,aAAa,KAAK,MAAM,EAAE;IAC5Bc,UAAU,GAAGlB,WAAW,CACtBa,KAAK,EACLC,UAAU,EACV,CAAC,CAACT,QAAQ,EAAE,CAAC,EAAEO,WAAW,GAAGL,aAAa,CAAC,EAC3CN,WAAW,CAACoB,KACd,CAAC;IACDF,KAAK,GAAGnB,WAAW,CACjBa,KAAK,EACLC,UAAU,EACV,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,GAAGF,WAAW,GAAGJ,aAAa,CAAC,EACvCP,WAAW,CAACoB,KACd,CAAC;IACDD,OAAO,GAAMpB,WAAW,CACtBa,KAAK,EACLC,UAAU,EACV,CAAC,CAACJ,UAAU,EAAE,CAAC,EAAE,CAAC,CAAC,EACnBT,WAAW,CAACoB,KACd,CAAE,QAAI;EACR,CAAC,MACI,IAAIjB,aAAa,KAAK,OAAO,EAAE;IAClCc,UAAU,GAAGlB,WAAW,CACtBa,KAAK,EACLC,UAAU,EACV,CAAC,CAACF,WAAW,GAAGL,aAAa,EAAE,CAAC,EAAEF,QAAQ,CAAC,EAC3CJ,WAAW,CAACoB,KACd,CAAC;IACDF,KAAK,GAAGnB,WAAW,CACjBa,KAAK,EACLC,UAAU,EACV,CAAC,CAAC,GAAGF,WAAW,GAAGJ,aAAa,EAAE,CAAC,EAAE,CAAC,CAAC,EACvCP,WAAW,CAACoB,KACd,CAAC;IACDD,OAAO,GAAMpB,WAAW,CACtBa,KAAK,EACLC,UAAU,EACV,CAAC,CAAC,EAAE,CAAC,EAAEJ,UAAU,CAAC,EAClBT,WAAW,CAACoB,KACd,CAAE,QAAI;EACR;EAEAV,SAAS,CAACW,IAAI,CACZ;IACEJ,UAAU,EAAEA;EACd,CAAC,EACD;IACEC,KAAK,EAAEA;EACT,CAAC,EACD;IACEC,OAAO,EAAEA;EACX,CACF,CAAC;EAED,OAAOH,MAAM;AACf\"}"};function horizontalStackLayout(){var modeConfig=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(){var _e=[new global.Error(),-7,-27];var _f=function _f(_value){var showLength=modeConfig.showLength,_modeConfig$snapDirec=modeConfig.snapDirection,snapDirection=_modeConfig$snapDirec===void 0?"left":_modeConfig$snapDirec,_modeConfig$moveSize=modeConfig.moveSize,moveSize=_modeConfig$moveSize===void 0?screen.width:_modeConfig$moveSize,_modeConfig$stackInte=modeConfig.stackInterval,stackInterval=_modeConfig$stackInte===void 0?18:_modeConfig$stackInte,_modeConfig$scaleInte=modeConfig.scaleInterval,scaleInterval=_modeConfig$scaleInte===void 0?0.04:_modeConfig$scaleInte,_modeConfig$opacityIn=modeConfig.opacityInterval,opacityInterval=_modeConfig$opacityIn===void 0?0.1:_modeConfig$opacityIn,_modeConfig$rotateZDe=modeConfig.rotateZDeg,rotateZDeg=_modeConfig$rotateZDe===void 0?30:_modeConfig$rotateZDe;var transform=[];var _getCommonVariables=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection}),validLength=_getCommonVariables.validLength,value=_getCommonVariables.value,inputRange=_getCommonVariables.inputRange;var _getCommonStyles=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection}),zIndex=_getCommonStyles.zIndex,opacity=_getCommonStyles.opacity;var styles={transform:transform,zIndex:zIndex,opacity:opacity};var translateX;var scale;var rotateZ;if(snapDirection==="left"){translateX=(0,_reactNativeReanimated.interpolate)(value,inputRange,[-moveSize,0,validLength*stackInterval],_reactNativeReanimated.Extrapolate.CLAMP);scale=(0,_reactNativeReanimated.interpolate)(value,inputRange,[1,1,1-validLength*scaleInterval],_reactNativeReanimated.Extrapolate.CLAMP);rotateZ=`${(0,_reactNativeReanimated.interpolate)(value,inputRange,[-rotateZDeg,0,0],_reactNativeReanimated.Extrapolate.CLAMP)}deg`;}else if(snapDirection==="right"){translateX=(0,_reactNativeReanimated.interpolate)(value,inputRange,[-validLength*stackInterval,0,moveSize],_reactNativeReanimated.Extrapolate.CLAMP);scale=(0,_reactNativeReanimated.interpolate)(value,inputRange,[1-validLength*scaleInterval,1,1],_reactNativeReanimated.Extrapolate.CLAMP);rotateZ=`${(0,_reactNativeReanimated.interpolate)(value,inputRange,[0,0,rotateZDeg],_reactNativeReanimated.Extrapolate.CLAMP)}deg`;}transform.push({translateX:translateX},{scale:scale},{rotateZ:rotateZ});return styles;};_f._closure={screen:screen,modeConfig:modeConfig,getCommonVariables:getCommonVariables,getCommonStyles:getCommonStyles,interpolate:_reactNativeReanimated.interpolate,Extrapolate:_reactNativeReanimated.Extrapolate};_f.__initData=_worklet_5756272565831_init_data;_f.__workletHash=5756272565831;_f.__stackDetails=_e;_f.__version="3.3.0";return _f;}();}function useHorizontalStackLayout(){var customAnimationConfig=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var customConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var config=(0,_react.useMemo)(function(){return Object.assign({type:customAnimationConfig.snapDirection==="right"?"negative":"positive",viewCount:customAnimationConfig.showLength},customConfig);},[customAnimationConfig,customConfig]);return{layout:horizontalStackLayout(customAnimationConfig),config:config};}var _worklet_8233536719177_init_data={code:"function anonymous(_value) {\n  const {\n    screen,\n    modeConfig,\n    getCommonVariables,\n    getCommonStyles,\n    interpolate,\n    Extrapolate\n  } = this._closure;\n  const {\n    showLength: showLength,\n    snapDirection = \"left\",\n    moveSize = screen.width,\n    stackInterval = 18,\n    scaleInterval = 0.04,\n    opacityInterval = 0.1,\n    rotateZDeg = 30\n  } = modeConfig;\n  const transform = [];\n  const {\n    validLength: validLength,\n    value: value,\n    inputRange: inputRange\n  } = getCommonVariables({\n    showLength: showLength,\n    value: _value,\n    snapDirection: snapDirection\n  });\n  const {\n    zIndex: zIndex,\n    opacity: opacity\n  } = getCommonStyles({\n    validLength: validLength,\n    value: value,\n    opacityInterval: opacityInterval,\n    snapDirection: snapDirection\n  });\n  const styles = {\n    transform: transform,\n    zIndex: zIndex,\n    opacity: opacity\n  };\n  let translateX;\n  let scale;\n  let rotateZ;\n  let translateY;\n  if (snapDirection === \"left\") {\n    translateX = interpolate(value, inputRange, [-moveSize, 0, 0], Extrapolate.CLAMP);\n    scale = interpolate(value, inputRange, [1, 1, 1 - validLength * scaleInterval], Extrapolate.CLAMP);\n    rotateZ = interpolate(value, inputRange, [-rotateZDeg, 0, 0], Extrapolate.CLAMP) + \"deg\";\n    translateY = interpolate(value, inputRange, [0, 0, validLength * stackInterval], Extrapolate.CLAMP);\n  } else if (snapDirection === \"right\") {\n    translateX = interpolate(value, inputRange, [0, 0, moveSize], Extrapolate.CLAMP);\n    scale = interpolate(value, inputRange, [1 - validLength * scaleInterval, 1, 1], Extrapolate.CLAMP);\n    rotateZ = interpolate(value, inputRange, [0, 0, rotateZDeg], Extrapolate.CLAMP) + \"deg\";\n    translateY = interpolate(value, inputRange, [validLength * stackInterval, 0, 0], Extrapolate.CLAMP);\n  }\n  transform.push({\n    translateX: translateX\n  }, {\n    scale: scale\n  }, {\n    rotateZ: rotateZ\n  }, {\n    translateY: translateY\n  });\n  return styles;\n}",location:"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts",sourceMap:"{\"version\":3,\"names\":[\"anonymous\",\"_value\",\"screen\",\"modeConfig\",\"getCommonVariables\",\"getCommonStyles\",\"interpolate\",\"Extrapolate\",\"_closure\",\"showLength\",\"snapDirection\",\"moveSize\",\"width\",\"stackInterval\",\"scaleInterval\",\"opacityInterval\",\"rotateZDeg\",\"transform\",\"validLength\",\"value\",\"inputRange\",\"zIndex\",\"opacity\",\"styles\",\"translateX\",\"scale\",\"rotateZ\",\"translateY\",\"CLAMP\",\"push\"],\"sources\":[\"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts\"],\"mappings\":\"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\"}"};function verticalStackLayout(){var modeConfig=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(){var _e=[new global.Error(),-7,-27];var _f=function _f(_value){var showLength=modeConfig.showLength,_modeConfig$snapDirec2=modeConfig.snapDirection,snapDirection=_modeConfig$snapDirec2===void 0?"left":_modeConfig$snapDirec2,_modeConfig$moveSize2=modeConfig.moveSize,moveSize=_modeConfig$moveSize2===void 0?screen.width:_modeConfig$moveSize2,_modeConfig$stackInte2=modeConfig.stackInterval,stackInterval=_modeConfig$stackInte2===void 0?18:_modeConfig$stackInte2,_modeConfig$scaleInte2=modeConfig.scaleInterval,scaleInterval=_modeConfig$scaleInte2===void 0?0.04:_modeConfig$scaleInte2,_modeConfig$opacityIn2=modeConfig.opacityInterval,opacityInterval=_modeConfig$opacityIn2===void 0?0.1:_modeConfig$opacityIn2,_modeConfig$rotateZDe2=modeConfig.rotateZDeg,rotateZDeg=_modeConfig$rotateZDe2===void 0?30:_modeConfig$rotateZDe2;var transform=[];var _getCommonVariables2=getCommonVariables({showLength:showLength,value:_value,snapDirection:snapDirection}),validLength=_getCommonVariables2.validLength,value=_getCommonVariables2.value,inputRange=_getCommonVariables2.inputRange;var _getCommonStyles2=getCommonStyles({validLength:validLength,value:value,opacityInterval:opacityInterval,snapDirection:snapDirection}),zIndex=_getCommonStyles2.zIndex,opacity=_getCommonStyles2.opacity;var styles={transform:transform,zIndex:zIndex,opacity:opacity};var translateX;var scale;var rotateZ;var translateY;if(snapDirection==="left"){translateX=(0,_reactNativeReanimated.interpolate)(value,inputRange,[-moveSize,0,0],_reactNativeReanimated.Extrapolate.CLAMP);scale=(0,_reactNativeReanimated.interpolate)(value,inputRange,[1,1,1-validLength*scaleInterval],_reactNativeReanimated.Extrapolate.CLAMP);rotateZ=`${(0,_reactNativeReanimated.interpolate)(value,inputRange,[-rotateZDeg,0,0],_reactNativeReanimated.Extrapolate.CLAMP)}deg`;translateY=(0,_reactNativeReanimated.interpolate)(value,inputRange,[0,0,validLength*stackInterval],_reactNativeReanimated.Extrapolate.CLAMP);}else if(snapDirection==="right"){translateX=(0,_reactNativeReanimated.interpolate)(value,inputRange,[0,0,moveSize],_reactNativeReanimated.Extrapolate.CLAMP);scale=(0,_reactNativeReanimated.interpolate)(value,inputRange,[1-validLength*scaleInterval,1,1],_reactNativeReanimated.Extrapolate.CLAMP);rotateZ=`${(0,_reactNativeReanimated.interpolate)(value,inputRange,[0,0,rotateZDeg],_reactNativeReanimated.Extrapolate.CLAMP)}deg`;translateY=(0,_reactNativeReanimated.interpolate)(value,inputRange,[validLength*stackInterval,0,0],_reactNativeReanimated.Extrapolate.CLAMP);}transform.push({translateX:translateX},{scale:scale},{rotateZ:rotateZ},{translateY:translateY});return styles;};_f._closure={screen:screen,modeConfig:modeConfig,getCommonVariables:getCommonVariables,getCommonStyles:getCommonStyles,interpolate:_reactNativeReanimated.interpolate,Extrapolate:_reactNativeReanimated.Extrapolate};_f.__initData=_worklet_8233536719177_init_data;_f.__workletHash=8233536719177;_f.__stackDetails=_e;_f.__version="3.3.0";return _f;}();}var _worklet_10327424297064_init_data={code:"function getCommonVariables(opts) {\n  const {\n    showLength: showLength,\n    value: _value,\n    snapDirection: snapDirection\n  } = opts;\n  function easeInOutCubic(v) {\n    return v < 0.5 ? 4 * v * v * v : 1 - (-2 * v + 2) ** 3 / 2;\n  }\n  const page = Math.floor(Math.abs(_value));\n  const diff = Math.abs(_value) % 1;\n  const value = _value < 0 ? -(page + easeInOutCubic(diff)) : page + easeInOutCubic(diff);\n  const validLength = showLength - 1;\n  let inputRange;\n  if (snapDirection === \"left\") inputRange = [-1, 0, validLength];else if (snapDirection === \"right\") inputRange = [-validLength, 0, 1];else throw new Error(\"snapDirection must be set to either left or right\");\n  return {\n    inputRange: inputRange,\n    validLength: validLength,\n    value: value\n  };\n}",location:"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts",sourceMap:"{\"version\":3,\"names\":[\"getCommonVariables\",\"opts\",\"showLength\",\"value\",\"_value\",\"snapDirection\",\"easeInOutCubic\",\"v\",\"page\",\"Math\",\"floor\",\"abs\",\"diff\",\"validLength\",\"inputRange\",\"Error\"],\"sources\":[\"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts\"],\"mappings\":\"AAsQA,SAAAA,kBAASA,CAAmBC,IAAA,EAI3B;EAGC,MAAM;IAAEC,UAAU,EAAVA,UAAU;IAAEC,KAAK,EAAEC,MAAM;IAAEC,aAAA,EAAAA;EAAc,CAAC,GAAGJ,IAAI;EACzD,SAASK,cAAcA,CAACC,CAAS,EAAU;IACzC,OAAOA,CAAC,GAAG,GAAG,GAAG,CAAC,GAAGA,CAAC,GAAGA,CAAC,GAAGA,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,GAAGA,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,CAAC;EAC5D;EACA,MAAMC,IAAI,GAAGC,IAAI,CAACC,KAAK,CAACD,IAAI,CAACE,GAAG,CAACP,MAAM,CAAC,CAAC;EACzC,MAAMQ,IAAI,GAAGH,IAAI,CAACE,GAAG,CAACP,MAAM,CAAC,GAAG,CAAC;EACjC,MAAMD,KAAK,GACHC,MAAM,GAAG,CAAC,GACR,EAAEI,IAAI,GAAGF,cAAc,CAACM,IAAI,CAAC,CAAC,GAC9BJ,IAAI,GAAGF,cAAc,CAACM,IAAI,CAAC;EACrC,MAAMC,WAAW,GAAGX,UAAU,GAAI,CAAC;EAEnC,IAAIY,UAAoC;EAExC,IAAIT,aAAa,KAAK,MAAM,EAC1BS,UAAU,GAAG,CAAC,CAAC,CAAC,EAAE,CAAC,EAAED,WAAW,CAAC,CAAC,KAC/B,IAAIR,aAAa,KAAK,OAAO,EAChCS,UAAU,GAAG,CAAC,CAACD,WAAW,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,KAElC,MAAM,IAAIE,KAAK,CAAC,mDAAmD,CAAC;EAEtE,OAAO;IACLD,UAAU,EAAVA,UAAU;IACVD,WAAW,EAAXA,WAAW;IACXV,KAAA,EAAAA;EACF,CAAC;AACH\"}"};var getCommonVariables=function(){var _e=[new global.Error(),1,-27];var _f=function _f(opts){var showLength=opts.showLength,_value=opts.value,snapDirection=opts.snapDirection;function easeInOutCubic(v){return v<0.5?4*v*v*v:1-(-2*v+2)**3/2;}var page=Math.floor(Math.abs(_value));var diff=Math.abs(_value)%1;var value=_value<0?-(page+easeInOutCubic(diff)):page+easeInOutCubic(diff);var validLength=showLength-1;var inputRange;if(snapDirection==="left")inputRange=[-1,0,validLength];else if(snapDirection==="right")inputRange=[-validLength,0,1];else throw new Error("snapDirection must be set to either left or right");return{inputRange:inputRange,validLength:validLength,value:value};};_f._closure={};_f.__initData=_worklet_10327424297064_init_data;_f.__workletHash=10327424297064;_f.__stackDetails=_e;_f.__version="3.3.0";return _f;}();var _worklet_1169076184363_init_data={code:"function getCommonStyles(opts) {\n  const {\n    interpolate\n  } = this._closure;\n  const {\n    snapDirection: snapDirection,\n    validLength: validLength,\n    value: value,\n    opacityInterval: opacityInterval\n  } = opts;\n  let zIndex;\n  let opacity;\n  if (snapDirection === \"left\") {\n    zIndex = Math.floor(interpolate(value, [-1.5, -1, -1 + Number.MIN_VALUE, 0, validLength], [Number.MIN_VALUE, validLength, validLength, validLength - 1, -1]) * 10000) / 100;\n    opacity = interpolate(value, [-1, 0, validLength - 1, validLength], [0.25, 1, 1 - (validLength - 1) * opacityInterval, 0.25]);\n  } else if (snapDirection === \"right\") {\n    zIndex = Math.floor(interpolate(value, [-validLength, 0, 1 - Number.MIN_VALUE, 1, 1.5], [1, validLength - 1, validLength, validLength, Number.MIN_VALUE]) * 10000) / 100;\n    opacity = interpolate(value, [-validLength, 1 - validLength, 0, 1], [0.25, 1 - (validLength - 1) * opacityInterval, 1, 0.25]);\n  } else {\n    throw new Error(\"snapDirection must be set to either left or right\");\n  }\n  return {\n    zIndex: zIndex,\n    opacity: opacity\n  };\n}",location:"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts",sourceMap:"{\"version\":3,\"names\":[\"getCommonStyles\",\"opts\",\"interpolate\",\"_closure\",\"snapDirection\",\"validLength\",\"value\",\"opacityInterval\",\"zIndex\",\"opacity\",\"Math\",\"floor\",\"Number\",\"MIN_VALUE\",\"Error\"],\"sources\":[\"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/stack.ts\"],\"mappings\":\"AAySA,SAAAA,eAASA,CAAgBC,IAAA,EAKxB;EAAA;IAAAC;EAAA,SAAAC,QAAA;EAGC,MAAM;IAAEC,aAAa,EAAbA,aAAa;IAAEC,WAAW,EAAXA,WAAW;IAAEC,KAAK,EAALA,KAAK;IAAEC,eAAA,EAAAA;EAAgB,CAAC,GAAGN,IAAI;EAEnE,IAAIO,MAAc;EAClB,IAAIC,OAAe;EAEnB,IAAIL,aAAa,KAAK,MAAM,EAAE;IAC5BI,MAAM,GACIE,IAAI,CAACC,KAAK,CAChBT,WAAW,CACTI,KAAK,EACL,CAAC,CAAC,GAAG,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAGM,MAAM,CAACC,SAAS,EAAE,CAAC,EAAER,WAAW,CAAC,EACjD,CACEO,MAAM,CAACC,SAAS,EAChBR,WAAW,EACXA,WAAW,EACXA,WAAW,GAAG,CAAC,EACf,CAAC,CAAC,CAEN,CAAC,GAAG,KACN,CAAC,GAAG,GAAG;IAETI,OAAO,GAAGP,WAAW,CACnBI,KAAK,EACL,CAAC,CAAC,CAAC,EAAE,CAAC,EAAED,WAAW,GAAG,CAAC,EAAEA,WAAW,CAAC,EACrC,CAAC,IAAI,EAAE,CAAC,EAAE,CAAC,GAAG,CAACA,WAAW,GAAG,CAAC,IAAIE,eAAe,EAAE,IAAI,CACzD,CAAC;EACH,CAAC,MACI,IAAIH,aAAa,KAAK,OAAO,EAAE;IAClCI,MAAM,GACIE,IAAI,CAACC,KAAK,CAChBT,WAAW,CACTI,KAAK,EACL,CAAC,CAACD,WAAW,EAAE,CAAC,EAAE,CAAC,GAAGO,MAAM,CAACC,SAAS,EAAE,CAAC,EAAE,GAAG,CAAC,EAC/C,CACE,CAAC,EACDR,WAAW,GAAG,CAAC,EACfA,WAAW,EACXA,WAAW,EACXO,MAAM,CAACC,SAAS,CAEpB,CAAC,GAAG,KACN,CAAC,GAAG,GAAG;IACTJ,OAAO,GAAGP,WAAW,CACnBI,KAAK,EACL,CAAC,CAACD,WAAW,EAAE,CAAC,GAAGA,WAAW,EAAE,CAAC,EAAE,CAAC,CAAC,EACrC,CAAC,IAAI,EAAE,CAAC,GAAG,CAACA,WAAW,GAAG,CAAC,IAAIE,eAAe,EAAE,CAAC,EAAE,IAAI,CACzD,CAAC;EACH,CAAC,MACI;IACH,MAAM,IAAIO,KAAK,CAAC,mDAAmD,CAAC;EACtE;EAEA,OAAO;IACLN,MAAM,EAANA,MAAM;IACNC,OAAA,EAAAA;EACF,CAAC;AACH\"}"};var getCommonStyles=function(){var _e=[new global.Error(),-2,-27];var _f=function _f(opts){var snapDirection=opts.snapDirection,validLength=opts.validLength,value=opts.value,opacityInterval=opts.opacityInterval;var zIndex;var opacity;if(snapDirection==="left"){zIndex=Math.floor((0,_reactNativeReanimated.interpolate)(value,[-1.5,-1,-1+Number.MIN_VALUE,0,validLength],[Number.MIN_VALUE,validLength,validLength,validLength-1,-1])*10000)/100;opacity=(0,_reactNativeReanimated.interpolate)(value,[-1,0,validLength-1,validLength],[0.25,1,1-(validLength-1)*opacityInterval,0.25]);}else if(snapDirection==="right"){zIndex=Math.floor((0,_reactNativeReanimated.interpolate)(value,[-validLength,0,1-Number.MIN_VALUE,1,1.5],[1,validLength-1,validLength,validLength,Number.MIN_VALUE])*10000)/100;opacity=(0,_reactNativeReanimated.interpolate)(value,[-validLength,1-validLength,0,1],[0.25,1-(validLength-1)*opacityInterval,1,0.25]);}else{throw new Error("snapDirection must be set to either left or right");}return{zIndex:zIndex,opacity:opacity};};_f._closure={interpolate:_reactNativeReanimated.interpolate};_f.__initData=_worklet_1169076184363_init_data;_f.__workletHash=1169076184363;_f.__stackDetails=_e;_f.__version="3.3.0";return _f;}();
//# sourceMappingURL=stack.js.map