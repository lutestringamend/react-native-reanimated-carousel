Object.defineProperty(exports,"__esModule",{value:true});exports.normalLayout=normalLayout;var _reactNativeReanimated=require("react-native-reanimated");var _worklet_6911475201616_init_data={code:"function anonymous(value) {\n  const {\n    interpolate,\n    size,\n    vertical\n  } = this._closure;\n  const translate = interpolate(value, [-1, 0, 1], [-size, 0, size]);\n  return {\n    transform: [vertical ? {\n      translateY: translate\n    } : {\n      translateX: translate\n    }]\n  };\n}",location:"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/normal.ts",sourceMap:"{\"version\":3,\"names\":[\"anonymous\",\"value\",\"interpolate\",\"size\",\"vertical\",\"_closure\",\"translate\",\"transform\",\"translateY\",\"translateX\"],\"sources\":[\"/home/runner/work/react-native-reanimated-carousel/react-native-reanimated-carousel/src/layouts/normal.ts\"],\"mappings\":\"AAKS,SAACA,SAAkBA,CAAAC,KAAA;EAAA;IAAAC,WAAA;IAAAC,IAAA;IAAAC;EAAA,SAAAC,QAAA;EAExB,MAAMC,SAAS,GAAGJ,WAAW,CAACD,KAAK,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAACE,IAAI,EAAE,CAAC,EAAEA,IAAI,CAAC,CAAC;EAElE,OAAO;IACLI,SAAS,EAAE,CACTH,QAAQ,GACJ;MACAI,UAAU,EAAEF;IACd,CAAC,GACC;MACAG,UAAU,EAAEH;IACd,CAAC;EAEP,CAAC;AACH\"}"};function normalLayout(opts){var size=opts.size,vertical=opts.vertical;return function(){var _e=[new global.Error(),-4,-27];var _f=function _f(value){var translate=(0,_reactNativeReanimated.interpolate)(value,[-1,0,1],[-size,0,size]);return{transform:[vertical?{translateY:translate}:{translateX:translate}]};};_f._closure={interpolate:_reactNativeReanimated.interpolate,size:size,vertical:vertical};_f.__initData=_worklet_6911475201616_init_data;_f.__workletHash=6911475201616;_f.__stackDetails=_e;_f.__version="3.3.0";return _f;}();}
//# sourceMappingURL=normal.js.map