# Instruções

Para instalar e rodar o projeto em um sistema linux debian, basta rodar o comando 

```
./setup.sh
```
 ou
```
sh ./setup.sh
```

# Detalhe importante

Caso for rodar em um provedor de nuvem, no repositória [thisevent-fiap-web](https://github.com/OscarSilvaOfficial/thisevent-fiap-web.git)
deve ser alterado o arquivo [consts.ts](https://github.com/OscarSilvaOfficial/thisevent-fiap-web/blob/master/src/consts.ts#L14-L18) e adicionar o ip publico alterando o ip setado nas linhas marcadas com [#IP_PUBLIC#]