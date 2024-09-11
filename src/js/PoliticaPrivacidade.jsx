import React from 'react';
import styles from '../css/PoliticaPrivacidade.module.css';

const PoliticaPrivacidade = () => {
    return (
        <div className={styles.containerPP}>
            <h1 className={styles.titlePP}>Política de Privacidade</h1>
            <p>
                Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais em conformidade com a
                <strong> Lei Geral de Proteção de Dados (LGPD)</strong> e outras regulamentações internacionais de privacidade.
            </p>

            <h2 className={styles.subtitlePP}>1. Coleta de informações pessoais</h2>
            <p>
                Coletamos as informações que você nos fornece diretamente quando utiliza nosso site, como nome, endereço de e-mail e outros dados
                relevantes ao preencher formulários. Além disso, podemos coletar informações automaticamente, como endereço IP,
                tipo de navegador, e histórico de navegação.
            </p>

            <h2 className={styles.subtitlePP}>2. Uso das informações</h2>
            <p>
                As informações coletadas são utilizadas para:
            </p>
            <ul className={styles.listPP}>
                <li>Personalizar sua experiência de navegação;</li>
                <li>Enviar comunicações e atualizações sobre nossos serviços;</li>
                <li>Melhorar nossos produtos e serviços com base no comportamento dos usuários;</li>
                <li>Cumprir obrigações legais ou regulatórias.</li>
            </ul>

            <h2 className={styles.subtitlePP}>3. Compartilhamento de dados com terceiros</h2>
            <p>
                Não compartilhamos suas informações pessoais com terceiros, exceto nos seguintes casos:
            </p>
            <ul className={styles.listPP}>
                <li>Quando houver exigência legal;</li>
                <li>Para proteger nossos direitos e propriedades;</li>
                <li>Com fornecedores que nos ajudam a operar o site, desde que concordem em manter suas informações em sigilo.</li>
            </ul>

            <h2 className={styles.subtitlePP}>4. Segurança dos dados</h2>
            <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra perda, roubo e acesso não autorizado.
                No entanto, mesmo com nossos esforços, a transmissão de informações pela internet não é completamente segura e não podemos garantir
                a segurança absoluta dos dados transmitidos para nosso site.
            </p>

            <h2 className={styles.subtitlePP}>5. Direitos dos titulares de dados (conforme LGPD)</h2>
            <p>
                A LGPD garante uma série de direitos aos titulares de dados, incluindo:
            </p>
            <ul className={styles.listPP}>
                <li><strong>Acesso:</strong> Você pode solicitar uma cópia dos dados pessoais que mantemos sobre você;</li>
                <li><strong>Correção:</strong> Se suas informações estiverem incorretas ou desatualizadas, você pode solicitar a correção;</li>
                <li><strong>Exclusão:</strong> Você pode solicitar a exclusão de seus dados pessoais, salvo quando houver obrigação legal de retê-los;</li>
                <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor de serviços ou produto;</li>
                <li><strong>Revogação do consentimento:</strong> Você pode revogar o consentimento para o uso de seus dados a qualquer momento.</li>
            </ul>

            <h2 className={styles.subtitlePP}>6. Transferência internacional de dados</h2>
            <p>
                Seus dados podem ser transferidos para fora do Brasil para a execução de nossos serviços. Sempre que isso ocorrer, garantimos que as
                proteções adequadas estejam em vigor, conforme exigido pela LGPD.
            </p>

            <h2 className={styles.subtitlePP}>7. Retenção de dados</h2>
            <p>
                Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo o cumprimento
                de obrigações legais, contratuais ou regulatórias.
            </p>

            <h2 className={styles.subtitlePP}>8. Alterações na política</h2>
            <p>
                Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você a revise regularmente para estar ciente de quaisquer alterações.
            </p>

            <h2 className={styles.subtitlePP}>9. Contato</h2>
            <p>
                Se você tiver alguma dúvida ou quiser exercer seus direitos sob a LGPD, entre em contato conosco através do e-mail:  
                <a href="mailto:devrogeriojunior@gmail.com" className={styles.emailLinkPP}> devrogeriojunior@gmail.com</a>.
            </p>
        </div>
    );
};

export default PoliticaPrivacidade;
