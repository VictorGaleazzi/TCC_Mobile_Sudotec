import i18n from 'i18n-js';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import * as ja from 'yup-locale-ja';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  'pt-BR': {
    Login: 'Login',
    Usuário: 'Usuário',
    Senha: 'Senha',
    RecuperarSenha: 'Recuperar Senha',
    Entrar: 'Entrar',
    GerarAtendimento: 'Gerar Atendimento',
    Avaliações: 'Avaliações',
    Relatórios: 'Relatórios',
    Atendimento: 'Atendimento',
    MotivoDoAtendimento: 'Motivo do Atendimento',
    Nome: 'Nome',
    Sobrenome: 'Sobrenome',
    Rua: 'Rua',
    Bairro: 'Bairro',
    Número: 'Número',
    LocalDoAtendimento: 'Local do Atendimento',
    Descrição: 'Descrição',
    EnviarAtendimento: 'Enviar Atendimento',
    VoltaràPáginaInicial: 'Voltar à Página Inicial',
    TraduzaSeuAplicativo: 'Traduza Seu Aplicativo',
    Português: 'Português',
    Espanhol: 'Espanhol',
    Japonês: 'Japonês',
  },
  'en-US': {
    Login: 'Login',
    Usuário: 'User',
    Senha: 'Password',
    RecuperarSenha: 'Recover Your Password',
    Entrar: 'Sign In',
  },
  ja: {
    Login: 'ログイン',
    Usuário: 'ユーザー',
    Senha: 'パスワード',
    RecuperarSenha: 'パスワード復旧',
    Entrar: 'ログインする',
  },
};
// Set the locale once at the beginning of your app.
i18n.locale = 'pt-BR';

function selectLocale() {
  switch (i18n.locale) {
    case 'pt-BR':
      Yup.setLocale(pt);
      break;
    case 'en-US':
      break;
    case 'ja':
      Yup.setLocale(ja.suggestive);
      break;
    default:
  }
}

export { i18n, selectLocale };
