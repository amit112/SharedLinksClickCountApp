﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SharedLinksClickCountApp.Migrations
{
    public partial class dateadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateClicked",
                table: "PostLinkClicks",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateClicked",
                table: "PostLinkClicks");
        }
    }
}
