# lodash-tree-shaking

This is just a wrapper around lodash. This Module is build so webpack can treeshake lodash.

## Install

1. run `yarn add lodash-tree-shaking` 
2. Replace your imports:

```js
// before
import { flatMap } from 'lodash'

// now
import { flatMap } from 'lodash-tree-shaking'

```

