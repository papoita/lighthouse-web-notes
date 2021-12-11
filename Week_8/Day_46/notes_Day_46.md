<!-- @format -->

Dec 10, 2021

By mistake I erased hedless vagrant file and broke the vagrant up connection.

CLI to fix it were
cd lighthouse

ls -al
rm -rf .vagrant
vagrant up
vagrant ssh
nvm install 12
nvm alias default 12

git config --global user.email 'githubemail8@gmail.com'

git config --global user.name 'fullnamegihub'

cd ~/.ssh
ls -al

//private keys are returned

ssh-add ~/.ssh/id_rsa

cat ~/.ssh/id_rsa.pub

//add returned keys to github ssh

# preparing for next tests

https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code

trying to include json eslint parameters into my vscode automatic fix...

https://gist.github.com/papoita/2f41728653936301de83ef68190d0652
