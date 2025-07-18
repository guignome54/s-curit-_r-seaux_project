Première ébauche de la topologie
<img width="933" height="557" alt="Screenshot_131" src="https://github.com/user-attachments/assets/c872573d-dd6f-4583-9cd7-527e6b71b1a8" />

## Sécurité
### ARP cache poisoning
Activer DHCP Snooping et DAI sur les commutateurs
### DHCP flooding
Activer DHCP Snooping sur les commutateurs
### MAC address flooding
Activer Port sécurity sur les commutateurs
### CDP flooding
Activer CDP uniquement quand c'est nécessaire (switchs, routeurs)
### STP exploit
Activer BPDU Guard et Root Guard
### DTP exploit
Bien définir les switchs trunk et access
### DDOS
?
### SQL injection
?
### Attaques de reconnaissances
?

# Points à aborder
## Redondance
Pour l'instant notre réseau est très vulnérable au pannes, il faut songer à multiplier les switchs pour viser une meilleure redondance
## Sécurité
Les points abordés précédemments devront obligatoirement être intégrés au configurations de nos commutateurs
## Adressage
Il faudra définir le plan d'adressage en fonction des vlans définies sur le schémas
## Méthodologie
Les configurations doivent êtres scindées en plusieurs groupes (ex: switchs, routeurs, etc...), ensuite nous pourrons écrire en fichier texte des fichiers de configurations prédéfinis en fonction de l'utilisation du matériel.
Pour ce faire, il existe déjà des documents à compléter dans les folders dédiés

