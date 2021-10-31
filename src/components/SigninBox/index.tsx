import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import {Button} from '../Button'
import { COLORS } from "../../theme";
import { useAuth } from '../../hooks/auth'

export function SigninBox() {
    const { signIn } = useAuth()

    return (
        <View style={styles.container}>
            <Button
            title='ENTRAR COM O GITHUB'
            color={COLORS.BLACK_SECONDARY}
            backgroundColor={COLORS.YELLOW}
            icon='github'
            onPress={signIn}
            />
        </View>
    )
}