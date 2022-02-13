import { View } from "react-native";
import { SImage, STitle } from "./styles";

interface Props {
    image: string;
    title?: string;
}

export function HLandscapeItem({
    image,
    title
}: Props){

    const safeTitle = !!title && title.length > 25 ? `${title.substring(0, 25)}...` : title

    return (
        <View style={{ paddingBottom: !!title ? 10 : 0 }}>
            <SImage source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} />
            {
                !!title && <STitle>{safeTitle}</STitle>
            }
        </View>
    )
}