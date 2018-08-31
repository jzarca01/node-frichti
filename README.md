# node-frichti

Une API pour Frichti

## Usage

```javascript
const Frichti = require('node-frichti')
const frichti = new Frichti()
```

### Authentification

```javascript
frichti.login(email, password)
```

### Récupérer le profil de l'utilisateur

```javascript
frichti.getProfile()
```

### Récupérer la liste des commandes

```javascript
frichti.getOrders()
```

### Récupérer les analytics de l'utilisateur

```javascript
frichti.getCustomerAnalytics()
```

### Récupérer les adresses de l'utilisateur

```javascript
frichti.getAddresses()
```

### Récupérer tous les créneaux de livraison

```javascript
frichti.getSlots()
```

### Récupérer le menu

```javascript
foodcheri.getMenu()
```