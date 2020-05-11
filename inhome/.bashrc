#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias ll='ls -l --color=auto'
alias la='ls -al --color=auto'

alias rm-'rm -i'

alias soundup='amixer set Master 5%+'
alias sounddown='amixer set Master 5%-'
alias soundshow='amixer set Master toggle'

PS1='[\u@\h \W]\$ '

if [ -f /usr/share/bash-completion/bash_completion ]; then
    source /usr/share/bash-completion/bash_completion   
fi

