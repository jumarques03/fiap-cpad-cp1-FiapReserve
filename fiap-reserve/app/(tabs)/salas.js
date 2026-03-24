import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useContext } from "react"; // Importa o hook do React
import { SalasContext } from "../../SalasContext"; // Importa o contexto

export default function Salas(){
    const router = useRouter();
    const { listaSalas } = useContext(SalasContext); // Consome a lista de salas do contexto
    
    return(
        <View style={styles.container}>
            <Text style={styles.descricao}>Confira a disponibilidade das salas hoje</Text>

            {/* Mapeia a lista do contexto para gerar as salas dinamicamente */}
            {listaSalas.map((sala) => (
                <View key={sala.id} style={styles.containerSalas}>
                    <View style={styles.icone}>  
                        <MaterialCommunityIcons name="google-classroom" size={32} color="white"/>
                    </View>
                    
                    <View style={styles.infoSala}>
                        <Text style={styles.titulo}>{sala.nome}</Text>
                        <Text style={styles.textoSala}>{sala.texto}</Text>
                    </View>
                    
                    {/* Renderiza o indicador verde ou vermelho com base no status */}
                    {sala.disponivel ? (
                        <View style={styles.indicadorLivre}>
                            <Text style={styles.textoIndicadorLivre}>Livre</Text>
                        </View>
                    ) : (
                        <View style={styles.indicadorOcupado}>
                            <Text style={styles.textoIndicadorOcupado}>Ocupado</Text>
                        </View>
                    )}
                </View>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "#1e1e1e", padding: 20, paddingTop: 30 },
    headerTitulo: { fontSize: 32, fontWeight: "bold", color: "#FFFFFF", marginBottom: 5 },
    descricao: { fontSize: 16, color: "#8C8C8C", marginBottom: 30 },
    containerSalas: { backgroundColor: "#2b2b2b", padding: 15, borderRadius: 20, width: "100%", flexDirection: "row", alignItems: "center", marginBottom:20 },
    icone: { width: 65, height: 65, alignItems: "center", justifyContent: "center", backgroundColor: "#FF0055", borderRadius: 35, marginRight: 15 },
    infoSala: { flex: 1, justifyContent: "center" },
    titulo: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginBottom: 4 },
    textoSala: { fontSize: 14, color: "#8C8C8C" },
    //Livre
    indicadorLivre: { borderColor: "#00C853", borderWidth: 1, borderRadius: 20, paddingVertical: 6, paddingHorizontal: 16 },
    textoIndicadorLivre: { color: "#00C853", fontWeight: "bold", fontSize: 14 },
    //Ocupado
    indicadorOcupado: { borderColor: "#FF5252", borderWidth: 1, borderRadius: 20, paddingVertical: 6, paddingHorizontal: 16 },
    textoIndicadorOcupado: { color: "#FF5252", fontWeight: "bold", fontSize: 14 }
});