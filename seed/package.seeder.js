"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const package_type_enum_1 = require("../packages/enum/package_type.enum");
async function seedPackages() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const packageModel = app.get('Package');
    try {
        await packageModel.deleteMany({});
        const packages = Object.values(package_type_enum_1.Package_Enum).map(price => ({ price }));
        await packageModel.insertMany(packages);
        console.log('Packages seeded successfully.');
    }
    catch (error) {
        console.error('Error seeding packages:', error);
    }
    finally {
        await app.close();
    }
}
seedPackages();
//# sourceMappingURL=package.seeder.js.map