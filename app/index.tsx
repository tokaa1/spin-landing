import { Image, Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { useFonts } from 'expo-font';
import { Link } from "expo-router";

type RGBString = `rgb(${number}, ${number}, ${number})`
const spinThemeColor = 'rgb(0, 255, 106)';
const niceRed = 'rgb(237, 52, 52)';
const blue = 'rgb(43, 100, 255)';
function rgbToRGBA(s: RGBString, alpha: number) {
  return ('rgba' + s.slice(3, -1) + `, ${alpha})`);
}

export default function Index() {
  const [fontsLoaded] = useFonts({
    BaiJamjureeLight: require("../assets/fonts/BaiJamjuree-Light.ttf"),
    BaiJamjureeRegular: require("../assets/fonts/BaiJamjuree-Regular.ttf"),
    BaiJamjureeMedium: require("../assets/fonts/BaiJamjuree-Medium.ttf"),
    BaiJamjureeBold: require("../assets/fonts/BaiJamjuree-Bold.ttf"),
    BaiJamjureeLightItalic: require("../assets/fonts/BaiJamjuree-LightItalic.ttf"),
    BaiJamjureeMediumItalic: require("../assets/fonts/BaiJamjuree-MediumItalic.ttf"),
    BaiJamjureeBoldItalic: require("../assets/fonts/BaiJamjuree-BoldItalic.ttf"),
  });

  if (!fontsLoaded)
    return <View style={{ flex: 1, backgroundColor: "#0a0a0a" }} />

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0a0a0a',
        gap: 30,
        overflow: 'scroll'
      }}
    >
      <View style={{
        flexDirection: 'row',
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{
          width: 150,
          height: 150,
          alignItems: 'flex-end'
        }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../assets/images/spin.png')}
          >
          </Image>
        </View>
        <View style={{
          alignItems: 'flex-start'
        }}>
          <BaiJamjureeBoldText style={{ fontSize: 50, color: spinThemeColor }}>
            {"Spin!?"}
          </BaiJamjureeBoldText>
          <BaiJamjureeLightItalicText style={{ fontSize: 25 }}>
            {"Master spinning your phone!"}
          </BaiJamjureeLightItalicText>
        </View>
      </View>
      <BaiJamjureeLightText style={{ fontSize: 15 }}>by tokaa</BaiJamjureeLightText>
      <View style={{
        flexDirection: 'row',
        gap: 10
      }}>
        <Link href={"/privacy"}>
          <BasicButton text="Privacy Policy" accentColor={niceRed} />
        </Link>
        <Link href={"/termsofuse"}>
          <BasicButton text="Terms of Use" accentColor={blue} />
        </Link>
      </View>
      <BaiJamjureeRegularText style={{ fontSize: 14 }}>
        {"Many in-game sounds are from "}
        <Link href="https://freesound.org/people/rhodesmas/">
          <BaiJamjureeBoldText style={{ fontSize: 18, color: niceRed, textDecorationLine: 'underline' }}>
            {"rhodesmas"}
          </BaiJamjureeBoldText>
        </Link>
        {", which are free and without limitation! Really great sounds by him."}
      </BaiJamjureeRegularText>
      <BaiJamjureeLightText style={{fontSize: 12}}>
        {"I hope you enjoy Spin!, I think it's kinda cool, maybe."} 
      </BaiJamjureeLightText>
      <BaiJamjureeLightText style={{fontSize: 12}}>
        {"Contact: "}
        <Link href={"https://github.com/tokaa1"}>
          <BaiJamjureeBoldText style={{fontSize: 14, color: blue}}>
            {"GitHub"}
          </BaiJamjureeBoldText>
        </Link>
        {" or email (tokaa1@proton.me) for any reason at all!"}
      </BaiJamjureeLightText>
    </View>
  );
}

function BasicButton({ text, style, fontSize = 20, onPress, accentColor = spinThemeColor, textColor = accentColor, glowLevel = 5 }: { text: string, style?: StyleProp<ViewStyle>, fontSize?: number, onPress?: () => void, accentColor?: RGBString, textColor?: string, glowLevel?: number }) {
  const backgroundColor = rgbToRGBA(accentColor, 0.2);

  return <Pressable onPress={onPress} style={[{
    minWidth: 160,
    minHeight: 45,
    borderRadius: 20,
    backgroundColor,
    borderColor: accentColor,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0px 0px ${glowLevel} 0px ${accentColor}`,
    paddingLeft: 10,
    paddingRight: 10
  }, style]}>
    <BaiJamjureeMediumText style={{
      color: textColor ? textColor : accentColor,
      fontSize,
    }}>
      {text}
    </BaiJamjureeMediumText>
  </Pressable>
}

function createBaiJamFontComponent(fontFamily: string) {
  return ({ children, style, numberOfLines, ellipsizeMode }: { children?: any, style: StyleProp<TextStyle>, numberOfLines?: number, ellipsizeMode?: string }) => {
    if (style) {
      (style as any).fontSize += 4;
    }
    return <Text style={[{ fontFamily, color: 'white', textAlign: 'center', transform: 'scaleY(0.95)' }, style]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode ? ellipsizeMode as any : undefined}>
      {children}
    </Text>
  };
}

export const BaiJamjureeLightText = createBaiJamFontComponent('BaiJamjureeLight')
export const BaiJamjureeRegularText = createBaiJamFontComponent('BaiJamjureeRegular')
export const BaiJamjureeMediumText = createBaiJamFontComponent('BaiJamjureeMedium')
export const BaiJamjureeBoldText = createBaiJamFontComponent('BaiJamjureeBold')
export const BaiJamjureeLightItalicText = createBaiJamFontComponent('BaiJamjureeLightItalic')
export const BaiJamjureeMediumItalicText = createBaiJamFontComponent('BaiJamjureeMediumItalic')
export const BaiJamjureeBoldItalicText = createBaiJamFontComponent('BaiJamjureeBoldItalic')