import styles from './Tabela.module.css'

const Tabela = () => {

    return (
        <table cellpadding="8" cellspacing="0"  >
            <thead>
                <tr className={styles.tr}>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Obesidade (grau)</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.imcAbaixo}>
                    <td>Menor que 18,5</td>
                    <td>Abaixo do peso</td>
                    <td>0</td>
                </tr>
                <tr className={styles.imcNormal}>
                    <td>18,5 – 24,9</td>
                    <td>Peso normal</td>
                    <td>0</td>
                </tr>
                <tr className={styles.imcSobrepeso}>
                    <td>25,0 – 29,9</td>
                    <td>Sobrepeso</td>
                    <td>I</td>
                </tr>
                <tr className={styles.imcObesidade1}>
                    <td>30,0 – 34,9</td>
                    <td>Obesidade leve</td>
                    <td>I</td>
                </tr>
                <tr className={styles.imcObesidade2}>
                    <td>35,0 – 39,9</td>
                    <td>Obesidade moderada</td>
                    <td>II</td>
                </tr>
                <tr className={styles.imcObesidade3}>
                    <td>40,0 ou mais</td>
                    <td>Obesidade grave</td>
                    <td>III</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;