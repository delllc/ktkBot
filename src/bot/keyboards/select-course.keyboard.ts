import { logHandle } from "~/bot/helpers/logging";
import { Menu } from "@grammyjs/menu";
import { Context } from "~/bot/types";
import { InlineKeyboard } from "grammy";
import ISO6391 from "iso-639-1";
import { text } from "stream/consumers";
import axios from "axios";

export const keyboard = new Menu<Context>("course");

/*
keyboard
  .text(
    {
      text: (ctx) => ctx.t("courses.secondCourse"),
      payload: "secondCourse",
    },

    logHandle("course")
    /!*    async (ctx) => {
          await ctx.editMessageText(`
                Ты выбрал 1 курс
                `);
        }*!/
  )
  .row();
keyboard
  .text(
    {
      text: (ctx) => ctx.t("courses.thirdCourse"),
      payload: "thirdCourse",
    },

    logHandle("course")
    /!*    async (ctx) => {
          await ctx.editMessageText(`
                Ты выбрал 1 курс
                `);
        }*!/
  )
  .row();
keyboard
  .text(
    {
      text: (ctx) => ctx.t("courses.fourCourse"),
      payload: "fourCourse",
    },

    logHandle("course")
    /!*    async (ctx) => {
          await ctx.editMessageText(`
                Ты выбрал 1 курс
                `);
        }*!/
  )
  .row();
*/
