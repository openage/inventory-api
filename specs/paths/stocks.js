module.exports = [{
    url: '/',
    get: {
        permissions: ['tenant.guest', 'tenant.user']
    },
    post: {
        permissions: ['tenant.user']
    }
}, {
    url: '/:id',
    put: {
        permissions: ['tenant.user']
    },
    delete: {
        permissions: ['tenant.user']
    },
    get: {
        permissions: ['tenant.guest', 'tenant.user']
    }
}]

// module.exports = [
//     {
//         url: '/',
//         post: { parameters: ['x-role-key'] },
//         get: {
//             parameters: [
//                 'x-role-key',
//                 { name: 'store-code', in: 'query', description: 'store code', required: true, type: 'string' },
//                 { name: 'productName', in: 'query', description: 'store code', required: false, type: 'string' }
//             ]
//         }
//     }, {
//         url: '/{id}',
//         get: { parameters: ['x-role-key'] }
//     }, {
//         url: '/bulk',
//         post: {
//             description: 'upload csv of stocks',
//             parameters: [{
//                 in: 'formData',
//                 name: 'record',
//                 type: 'file',
//                 description: 'file to upload'
//             }, {
//                 name: 'x-role-key',
//                 in: 'header',
//                 description: 'Role-key (ED)',
//                 required: true
//             },
//             { name: 'store-code', in: 'query', description: 'store code', required: true, type: 'string' }],
//             responses: {
//                 default: {
//                     schema: {
//                         $ref: '#/definitions/Error'
//                     }
//                 }
//             }
//         }
//     }]
