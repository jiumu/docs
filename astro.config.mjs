// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JM Docs',
            description:'常用文档集成',
            locales: {
                root:{
                    label:'中文',
                    lang:'zh-CN'
                }
            },
            lastUpdated:true,
            customCss:[
                './src/styles/index.css'
            ],
			social: [{ icon: 'github', label: 'Vite', href: 'https://github.com/jiumu/docs' }],
			sidebar: [

                {
                    label:'Linux常用命令',
                    items:[
                        {label:'文件目录',autogenerate:{directory:'linux-command/files'},collapsed:true},
                        {label:'查看编辑',autogenerate:{directory:'linux-command/edit'},collapsed:true},
                        {label:'系统信息',autogenerate:{directory:'linux-command/system'},collapsed:true},
                        {label:'权限',autogenerate:{directory:'linux-command/permission'},collapsed:true},
                        {label:'网络',autogenerate:{directory:'linux-command/network'},collapsed:true},
                        {label:'软件包',autogenerate:{directory:'linux-command/package'},collapsed:true}

                    ]
                }
			],
		}),
	],
});
