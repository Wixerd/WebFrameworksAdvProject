import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'http://host.docker.internal:52265/graphql',
   documents: ['src/**/*.tsx'],
   generates: {
      './src/gql/': {
        preset: 'client',
      }
   }
}
export default config