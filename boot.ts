import { AppModule } from "./src/app/app.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

bootstrap(AppModule,[HTTP_PROVIDERS]);