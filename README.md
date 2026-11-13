# Portfolio – Jonathan

Site statique (HTML / CSS / JS), sans framework ni dépendance externe.

## Lancer en local
Ouvrir `index.html` dans un navigateur, ou utiliser l'extension Live Server de VS Code.

## Structure
- `index.html`, `apropos.html`, `competences.html`, `projets.html`, `homelab.html`, `contact.html` : une page par rubrique
- `script.js` : la liste des projets (`PROJECTS`, tout en haut) et les animations
- `style.css` : les couleurs (variables en haut du fichier) et le design
- `assets/images/<rubrique>/` : les photos (libres de droits, voir `assets/CREDITS.md`)
- `assets/videos/` : vidéos de fond (optionnel, voir `HERO_VIDEO` dans `script.js`)
- `assets/fonts/` : police Inter hébergée localement

## Mise en ligne
Settings → Pages → Branch `main`, dossier `/ (root)`.

## Choix de sécurité
- Aucun backend, aucune base de données, aucun formulaire → surface d'attaque minimale.
- Content-Security-Policy restrictive (ressources locales uniquement).
- Liens externes en `rel="noopener noreferrer"`.
- Aucun cookie ni traceur.

## À faire
- [ ] Remplir les textes entre crochets
- [ ] Ajouter le writeup d'audit des projets PHP
- [ ] Documenter le homelab
